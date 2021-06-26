//package com.aurochs.aurochsfc.config;
//
//import com.amazonaws.SdkClientException;
//import com.amazonaws.auth.AWSCredentials;
//import com.amazonaws.auth.AWSStaticCredentialsProvider;
//import com.amazonaws.auth.BasicAWSCredentials;
//import com.amazonaws.auth.BasicSessionCredentials;
//import com.amazonaws.regions.Regions;
//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.AmazonS3ClientBuilder;
//import com.amazonaws.util.StringUtils;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import static com.amazonaws.SDKGlobalConfiguration.*;
//
//@Configuration
//public class AmazonConfig {
//
//    @Bean
//    public AmazonS3 s3(){
//
//        AWSCredentials awsCredentials = new BasicAWSCredentials(
//                this.accesskey = ,
//                this.secretkey=  System.getenv(SECRET_KEY_ENV_VAR)
//        );
//
//        return AmazonS3ClientBuilder
//                .standard()
//                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
//                .build();
//    }
//}
