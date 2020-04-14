module Character exposing (..)

import Attributes exposing (Attribute, attributes)
import Html exposing (..)
import Html.Attributes as HtmlAttr
import Html.Events exposing (..)


type alias ChAttributes =
    { bravery : Int
    , intelligence : Int
    , intuition : Int
    , charisma : Int
    , dexterity : Int
    , agility : Int
    , konstitution : Int
    , strength : Int
    }


type alias Character =
    { name : String
    , attributes : ChAttributes
    }


newCharacter : Character
newCharacter =
    { name = "Gaston der Glückliche"
    , attributes =
        { bravery = 10
        , intelligence = 10
        , intuition = 10
        , charisma = 10
        , dexterity = 10
        , agility = 10
        , konstitution = 10
        , strength = 10
        }
    }


check : Character -> Attributes.Attribute -> Int -> Int
check character attribute diceRoll =
    max (diceRoll - Attributes.getProp attribute character.attributes) 0


type Msg
    = UpdateAttribute Attributes.Attribute Int


update : Msg -> Character -> ( Character, Cmd Msg )
update msg character =
    case msg of
        UpdateAttribute attr value ->
            ( { character | attributes = updateAttribute attr value character.attributes }, Cmd.none )


updateAttribute : Attributes.Attribute -> Int -> ChAttributes -> ChAttributes
updateAttribute attr value attributes =
    { attributes | bravery = value }


view : Character -> Html Msg
view chr =
    article
        [ HtmlAttr.class "" ]
        [ h1 [] [ text chr.name ]
        , viewAttributes chr.attributes
        ]


viewAttributes : ChAttributes -> Html Msg
viewAttributes chAttributes =
    table []
        [ thead []
            [ tr []
                [ th [] [ text "Eigenschaft" ]
                , th [] [ text "Wert" ]
                , th [] [ span [ HtmlAttr.class "sr-only" ] [ text "Aktionen" ] ]
                ]
            ]
        , tbody []
            (List.map
                (\attr ->
                    let
                        value =
                            chAttributes |> Attributes.getProp attr
                    in
                    tr []
                        [ td [] [ attr |> Attributes.getLabel |> text ]
                        , td [] [ value |> String.fromInt |> text ]
                        , td []
                            [ viewChangeAttrButton "+" attr (value + 1)
                            , viewChangeAttrButton "-" attr (value - 1)
                            ]
                        ]
                )
                attributes
            )
        ]


viewChangeAttrButton : String -> Attributes.Attribute -> Int -> Html Msg
viewChangeAttrButton label attr newValue =
    button [ onClick (UpdateAttribute attr newValue) ] [ text label ]
