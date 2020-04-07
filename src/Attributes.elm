module Attributes exposing (Attribute, getAbbreviation, getLabel, getProp)


type Attribute
    = Bravery
    | Intelligence
    | Intuition
    | Charisma
    | Dexterity
    | Agility
    | Konstitution
    | Strength


getProp :
    Attribute
    ->
        ({ b
            | bravery : a
            , intelligence : a
            , intuition : a
            , charisma : a
            , dexterity : a
            , agility : a
            , konstitution : a
            , strength : a
         }
         -> a
        )
getProp attr =
    case attr of
        Bravery ->
            .bravery

        Intelligence ->
            .intelligence

        Intuition ->
            .intuition

        Charisma ->
            .charisma

        Dexterity ->
            .dexterity

        Agility ->
            .agility

        Konstitution ->
            .konstitution

        Strength ->
            .strength


getLabel : Attribute -> String
getLabel attr =
    case attr of
        Bravery ->
            "Mut"

        Intelligence ->
            "Klugheit"

        Intuition ->
            "Intuition"

        Charisma ->
            "Charisma"

        Dexterity ->
            "Fingerfertigkeit"

        Agility ->
            "Gewandheit"

        Konstitution ->
            "Konstitution"

        Strength ->
            "Körperkraft"


getAbbreviation : Attribute -> String
getAbbreviation attr =
    case attr of
        Bravery ->
            "Mu"

        Intelligence ->
            "Kl"

        Intuition ->
            "In"

        Charisma ->
            "Ch"

        Dexterity ->
            "FF"

        Agility ->
            "Ge"

        Konstitution ->
            "Ko"

        Strength ->
            "KK"
