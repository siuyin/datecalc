package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/siuyin/dflt"
)

func main() {
	// Simple static webserver:
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", dflt.EnvIntMust("PORT", 8081)), http.FileServer(http.Dir("./public"))))
}
