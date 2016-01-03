module Main where

import Prelude

import Control.Monad.Aff (runAff)
import Control.Monad.Eff.Exception (throwException)

import Halogen
import Halogen.Util (appendToBody)

import qualified App.App as App

main = runAff throwException (const (pure unit)) $ do 
  app <- runUI App.ui unit
  appendToBody app.node
