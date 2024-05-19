package com.IEFinalProject.Backend.controller;

import com.IEFinalProject.Backend.dto.ProductReqRes;
import com.IEFinalProject.Backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProductsController {
    @Autowired
    private ProductService productService;


    @PostMapping("/auth/addProduct")
    public ResponseEntity<ProductReqRes> addNewProduct(@RequestBody ProductReqRes product){
        return ResponseEntity.ok(productService.addProduct(product));
    }

    @GetMapping("/public/getAllProducts")
    public ResponseEntity<ProductReqRes> getAllProducts(){
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @DeleteMapping("/auth/delete/{productId}")
    public ResponseEntity<ProductReqRes> deleteProduct(@PathVariable Integer productId){
        return ResponseEntity.ok(productService.deleteProduct(productId));
    }

    @GetMapping("/public/getProductDetails/{productId}")
    public ResponseEntity<ProductReqRes> getProductDetails(@PathVariable Integer productId){
        return ResponseEntity.ok(productService.getProductDetails(productId));
    }

    @GetMapping("/public/getProductByCategory/{category}")
    public ResponseEntity<ProductReqRes> getProductByCategory(@PathVariable String category){
        return ResponseEntity.ok(productService.getProductByCategory(category));
    }



}
