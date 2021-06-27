package com.aurochs.aurochsfc.exception;


public class BeerNotFoundException extends RuntimeException{
    public BeerNotFoundException(String message) {
        super(message);
    }
}