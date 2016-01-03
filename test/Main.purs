module Test.Main where

import Control.Monad.Eff
import Control.Monad.Eff.Console (log)

main :: Eff Unit
main = do
  log "You should add some tests."
