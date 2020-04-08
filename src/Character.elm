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


check : Character -> Attribute -> Int -> Int
check character attribute diceRoll =
    max (diceRoll - Attributes.getProp attribute character.attributes) 0
