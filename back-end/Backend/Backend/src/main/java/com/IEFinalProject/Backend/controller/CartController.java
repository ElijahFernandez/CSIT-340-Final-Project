package com.IEFinalProject.Backend.controller;

import com.IEFinalProject.Backend.dto.CartItemReqRes;
import com.IEFinalProject.Backend.dto.CartReqRes;
import com.IEFinalProject.Backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/user/getCart/{username}")
    public ResponseEntity<CartReqRes> getCart(@PathVariable String username){
        return ResponseEntity.ok(cartService.getCart(username));
    }

    @GetMapping("/user/getCartTotal/{username}")
    public ResponseEntity<Double> getTotalAmount(@PathVariable String username){
        return ResponseEntity.ok(cartService.getTotalAmount(username));
    }

    @GetMapping("/user/getUserCart/{username}")
    public ResponseEntity<CartItemReqRes> getUserCart(@PathVariable String username){
        return ResponseEntity.ok(cartService.getUserCart(username));
    }

}
