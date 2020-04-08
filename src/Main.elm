port module Main exposing (..)

{-| <http://guide.elm-lang.org/architecture/index.html>
-}

import Browser
import Character
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode as Json


main : Program (Maybe Model) Model Msg
main =
    Browser.document
        { init = init
        , view = \model -> { title = "DSA • Character Sheet", body = [ view model ] }
        , update = updateWithStorage
        , subscriptions = \_ -> Sub.none
        }


port setStorage : Character.Character -> Cmd msg


{-| We want to `setStorage` on every update. This function adds the setStorage
command for every step of the update function.
-}
updateWithStorage : Msg -> Model -> ( Model, Cmd Msg )
updateWithStorage msg model =
    let
        ( newModel, cmds ) =
            update msg model
    in
    ( newModel
    , Cmd.batch [ setStorage newModel, cmds ]
    )



-- MODEL
-- The full application state


type alias Model =
    Character.Character


init : Maybe Model -> ( Model, Cmd Msg )
init maybeModel =
    ( Maybe.withDefault Character.newCharacter maybeModel
    , Cmd.none
    )


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    main_
        [ class ""
        ]
        [ section
            [ class "" ]
            [ text "Lorem ipsum" ]
        , infoFooter
        ]


onEnter : Msg -> Attribute Msg
onEnter msg =
    let
        isEnter code =
            if code == 13 then
                Json.succeed msg

            else
                Json.fail "not ENTER"
    in
    on "keydown" (Json.andThen isEnter keyCode)


infoFooter : Html msg
infoFooter =
    footer [ class "info" ]
        [ p []
            [ text "Written by "
            , a [ href "https://github.com/lwassermann" ] [ text "Lars Wassermann" ]
            ]
        , p []
            [ a [ href "https://github.com/lwassermann/dsa-talent-test" ]
                [ text "Github" ]
            ]
        ]
