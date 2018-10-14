#!/bin/bash
curl -H "Content-Type: application/json" --data \
    '{comment: {text: "what kind of idiot name is foo?"},
      languages: ["en"],
      requestedAttributes: {TOXICITY:{}} }' \
    https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyBwW-rzM_A6MF2G-mrGQixet1l55wzDabI