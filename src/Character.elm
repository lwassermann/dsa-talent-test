module Character exposing (..)

import Attributes exposing (Attribute)


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


check : Character -> Attribute -> Int -> Int
check character attribute diceRoll =
    max (diceRoll - Attributes.getProp attribute character.attributes) 0
