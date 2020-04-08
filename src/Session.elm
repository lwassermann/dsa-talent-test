module Session exposing (..)

import Character as Chr


type Session
    = Player Chr.Character


newSession : Session
newSession =
    Player Chr.newCharacter


getCharacter : Session -> Chr.Character
getCharacter session =
    case session of
        Player chr ->
            chr
