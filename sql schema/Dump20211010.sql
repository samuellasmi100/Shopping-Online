CREATE DATABASE  IF NOT EXISTS `super_market` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `super_market`;
-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: super_market
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `cart_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=497 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (466,1,207,7,25),(467,1,208,12,17),(468,1,208,6,46),(469,1,208,5,7),(470,1,209,5,7),(471,1,209,6,46),(472,1,210,5,7),(473,1,210,6,46),(479,1,219,7,25),(480,1,219,6,46),(481,1,219,5,7),(482,1,219,4,29),(483,1,219,3,8),(495,1,246,5,7),(496,1,247,5,7);
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `create_cart_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status_cart` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (207,304941065,'2021-10-05 00:00:00',0),(208,304941065,'2021-10-05 00:00:00',0),(209,304941065,'2021-10-05 00:00:00',0),(210,304941065,'2021-10-05 00:00:00',0),(219,304941065,'2021-10-10 00:00:00',0),(246,304941065,'2021-10-10 00:00:00',0),(247,304941065,'2021-10-10 00:00:00',1);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Dairy'),(2,'Bakery'),(3,'Meat '),(4,'Drinks'),(5,'Frozen Food');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(9) NOT NULL,
  `cart_id` int NOT NULL,
  `final_price` int NOT NULL,
  `city_delivery` varchar(50) NOT NULL,
  `street_delivery` varchar(50) NOT NULL,
  `delivery_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `payment` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (11,'304941065',154,7,'Jerusalem','hakablan','2021-09-25 21:00:00','2021-09-05 12:33:07','4580'),(24,'304941065',219,115,'Tel Aviv','hakablan','2021-10-26 21:00:00','2021-10-10 09:43:04','5804'),(25,'304941065',246,7,'Jerusalem','hakablan','2021-10-26 21:00:00','2021-10-10 18:30:40','4580');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `image` varchar(455) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`product_name`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Milk',8,'https://www.tnuva.co.il/uploads/product_items/513_20141014_120036.jpg',1),(4,'Cheddar Cheese',29,'https://www.tnuva.co.il/uploads/f_5eb2ca62457c8_1588775522.jpg',1),(5,'Cheese',7,'https://www.tnuva.co.il/uploads/f_5ed4a98ebd9d6_1590995342.jpg',1),(6,'Minced Meat',46,'https://storage.googleapis.com/sp-public/gs1-products/1107/large/7290006550972.jpg?_a=1602736117716',3),(7,'Frozen Chicken',25,'https://www.nizat.com/ProductsImages/thumbs/X379113_652018132540_250_250.jpg',3),(8,'Entrecote',76,'https://cookli.co.il/wp-content/uploads/2020/02/rib-rye-steak-1024x768.jpg',3),(9,'Sliced ​​Bread',7,'https://st1.foodsd.co.il/Images/Products/large/5Z1gP6XaIu.jpg',2),(10,'White Finger Rolls',10,'https://d3m9l0v76dty0.cloudfront.net/system/photos/4727141/large/66b16810d1716866271eaa18a77e9f65.jpg',2),(11,'Baggt',5,'http://www.amit-pastry.com/images/485x355/May2014/%D7%97%D7%A6%D7%99-%D7%91%D7%90%D7%92%D7%98.jpg',2),(12,'Soft Cheese',17,'https://www.bhonline.co.il/images/itempics/3025_171220201553281_large.jpg',1),(13,'Cola 2 Litre Bottle',7,'https://i1.wp.com/all-world.news/wp-content/uploads/2019/07/img_20190714_180055_6823526501333661853308.jpg',4),(14,'Chocolate Drink',13,'https://www.strauss-group.co.il/wp-content/blogs.dir/1/files/7290003029181-1.png',1),(15,'Chocolate Bag',4,'https://www.strauss-group.co.il/wp-content/blogs.dir/1/files/7290000042855-1.png',1),(16,'Minced Meat Vegan',89,'https://d3m9l0v76dty0.cloudfront.net/system/photos/5775825/large/4f40906564b4d1e25f737a1269c28e7a.jpg',3),(17,'Sausage',28,'https://tlvtimes.co.il/wp-content/uploads/2021/04/B62676_7290111566332_0-1-1.png',5),(18,'Juice',19,'https://kenyononline.co.il/test/wp-content/uploads/2020/03/%D7%95%D7%99%D7%98%D7%9E%D7%99%D7%A0%D7%A6%D7%99%D7%A7-%D7%9C%D7%99%D7%9E%D7%95%D7%9F-300x300.jpg',4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(455) NOT NULL,
  `city` varchar(45) DEFAULT 'null',
  `street` varchar(45) DEFAULT 'null',
  `role` tinyint DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (111111111,'ertgbg','dfegty','q@gmail.com','$2a$10$WGeSCtdzSGL4kHVQGCfUA.VvNSpMbcTuxhkjTPBZdDdfAzz1mBqvO','Tel Aviv','rabi akiva',0),(204068027,'daniel','lasmi','d@gmail.com','$2a$10$pRTzOOiB8X2NE4eQVP0gluuao4f3oVQGLsAmvkPlOFjv.stBy5tsO','Jerusalem','rabi akiva',1),(222453920,'shira','lasmi','shira@gmail.com','$2a$10$5NF6gJ1SDk9Rn758OIugaeZ29uio5qGmOPs2.euFXNZQEZB2ysdqi','Petah Tikva','histadrut 15',0),(304941065,'samuel','lasmi','a@gmail.com','$2a$10$3.XeZ97qdrmCRFljfvVDUenDApJiC8R1gLtlOAeoPE2UQ/88qH4rq','Jerusalem','hakablan',0),(339891046,'samuel','lasmi','kobikobihome@gmail.com','$2a$10$bSoY159xi5WW0VaVNHSzMOUL2kFwLsXZpseU/hcDU9GexsV108zwK','Haifa','rabi akiva',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-10 21:43:37
