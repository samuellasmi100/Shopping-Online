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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-10 21:39:44
