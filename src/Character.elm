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


view : Character -> Html msg
view chr =
    article
        [ HtmlAttr.class "" ]
        [ h1 [] [ text chr.name ]
        , viewAttributes chr.attributes
        ]


viewAttributes : ChAttributes -> Html msg
viewAttributes chAttributes =
    table []
        [ thead []
            [ tr []
                [ th [] [ text "Eigenschaft" ]
                , th [] [ text "Wert" ]
                ]
            ]
        , tbody []
            (List.map
                (\attr ->
                    tr []
                        [ td [] [ attr |> Attributes.getLabel |> text ]
                        , td [] [ chAttributes |> Attributes.getProp attr |> String.fromInt |> text ]
                        ]
                )
                attributes
            )
        ]
