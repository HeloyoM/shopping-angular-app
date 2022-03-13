-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shopping-online
-- ------------------------------------------------------
-- Server version	8.0.26

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
  `productId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `image` longtext,
  PRIMARY KEY (`productId`),
  UNIQUE KEY `productId_UNIQUE` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Milk',2,6,'https://d3m9l0v76dty0.cloudfront.net/system/photos/4084565/large/0f272baf148f69a2d69ab7eb97cb5058.jpg'),(2,'Cheese',2,10,'https://www.tnuva.co.il/uploads/f_5d0a337ea2e39_1560949630.jpg'),(3,'Olive cheese',2,11,'https://www.tnuva.co.il/uploads/f_60d43fbd63056_1624522685.jpg'),(4,'Cottage cheese',2,6,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/IHA18_L_P_41445_1.png'),(5,'Muller Yogurt Strawberry',2,6,'https://www.muller-israel.co.il/wp-content/uploads/2018/06/7290102398287-1.png'),(6,'Muller Yogurt Lemon',2,6,'https://d3m9l0v76dty0.cloudfront.net/system/photos/4737941/large/d752b1a1af8a5addde0deae3a7db1f4c.jpg'),(7,'Soy halibut',2,8,'https://www.tnuva.co.il/uploads/f_603c90453f1ba_1614581829.jpg'),(8,'Yellow cheese',2,24,'https://www.tnuva.co.il/uploads/f_5eb2ca62457c8_1588775522.jpg'),(9,'Bulgarian cheese',2,25,'https://www.gad-dairy.co.il/wp-content/uploads/2018/04/h6810327_550x55018.png'),(10,'Cheddar cheese',2,26,'http://www.willi-food.co.il/wp-content/uploads/2019/05/7290108503982.jpg'),(11,'Mince',3,39,'https://www.tnuva.co.il/uploads/f_573ae9a2b50d3_1463478690.jpg'),(12,'Sausage',3,15,'https://www.oftov.co.il/_media/media/81/2200.png?t=1612357570'),(13,'Shoulder meat',3,65,'https://www.meat-sharabi.co.il/img/images/Products/meat/Frozen%20beef/%D7%91%D7%A7%D7%A8%20%D7%A7%D7%A4%D7%95%D7%90-%D7%A6%D7%9C%D7%99%20%D7%9B%D7%AA%D7%A3%20%D7%9E%D7%A1\'%205%20%D7%AA%D7%A0%D7%95%D7%91%D7%94.jpg'),(14,'Roast meat',3,34,'https://recipes.lidl.co.uk/var/site/storage/images/_aliases/960x960/5/4/0/0/250045-2-eng-GB/Roast-beef-with-honey-mustard-butter-and-crispy-bacon-with-pan-fried-zesty-kale.jpg'),(15,'Chickens',3,43,'https://www.ayaakov.co.il/files/products/product116_image1_2020-03-07_21-05-31.jpg'),(16,'Sliced ​​chicken breast',3,35,'https://storage.googleapis.com/sp-public/product-images/global/971496/1966227/large.jpg'),(17,'Wings',3,15,'https://www.ayaakov.co.il/files/products/product113_image1_2020-03-07_21-05-24.jpg'),(18,'Smoked Salmon',3,15,'https://m.pricez.co.il/ProductPictures/7290000662817.jpg'),(19,'Fillet to lightning',3,20,'https://m.pricez.co.il/ProductPictures/7290002830184.jpg'),(20,'tuna',3,8,'https://taaman.co.il/wp-content/uploads/2020/07/7290016106671.jpg'),(21,'Bleach',4,18,'https://www.sano.co.il/media/SA7290000294780.jpg'),(22,'Gloves',4,20,'https://www.sano.co.il/media/7290012117565comp-1.jpg'),(23,'Window cleaner',4,11,'https://www.sano.co.il/media/7290108357202-1-1-1-140x300.jpg'),(24,'Floor cleaner',4,24,'https://sanopro.co.il/wp-content/uploads/2020/03/FRESH_S-255_4L.jpg'),(25,'garbage bags',4,12,'https://www.sano.co.il/media/7290108350210-300x178.jpg'),(26,'Sandwich bags',4,15,'https://www.sano.co.il/media/7290014397279-B.jpg'),(27,'Toothpicks',4,11,'https://m.pricez.co.il/ProductPictures/7290002007500.jpg'),(28,'Towels',4,15,'https://superpharmstorage.blob.core.windows.net/hybris/products/mobile/medium/7290004731816.jpg'),(29,'Scotts',4,9,'https://www.sano.co.il/media/7290004731410-f-1-300x163.jpg'),(30,'Steel wool',4,6,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/FHH62_L_P_7296073090496_1.png'),(31,'tomato',5,4,'https://st1.foodsd.co.il/Images/Products/large/hagiSJ2GI3.jpg'),(32,'cucumber',5,3,'https://www.agogo.co.il/wp-content/uploads/2013/05/%D7%9E%D7%9C%D7%A4%D7%A4%D7%95%D7%9F-%D7%99%D7%AA%D7%A8%D7%95%D7%A0%D7%95%D7%AA.jpg'),(33,'Avocado',5,12,'https://10pri.biz/wp-content/uploads/2020/10/%D7%90%D7%91%D7%95%D7%A7%D7%93%D7%95.jpg'),(34,'Orange',5,4,'https://d3m9l0v76dty0.cloudfront.net/system/photos/4768880/original/7be9ef6b6632faf20fe777aab0d88d39.jpg'),(35,'clementine',5,9,'https://www.shefab.co.il/files/products/product15_image1_2020-08-31_15-21-19.jpg'),(36,'lemon',5,5,'https://shifke.com/wp-content/uploads/2018/07/%D7%9C%D7%99%D7%9E%D7%95%D7%9F.jpg'),(37,'watermelon',5,6,'https://www.hapardesan.co.il/images/itempics/2_30032020175948_large.jpg'),(38,'pepper',5,4,'https://m.pricez.co.il/ProductPictures/Pricez65718.jpg'),(39,'Potato',5,4,'https://d3m9l0v76dty0.cloudfront.net/system/photos/3814511/large/6c29bebc8b22cf06c1df628883e53d2b.jpg'),(40,'sweet potato',5,5,'https://www.nizat.com/ProductsImages/O796380.jpg'),(41,'Canned pineapple',1,9,'https://cashcow-cdn.azureedge.net/images/ccebb316-1d58-4f9d-ba31-2aefbe9b0cfb.jpg'),(42,'Canned chickpeas',1,11,'https://cashcow-cdn.azureedge.net/images/539acb90-3379-46bc-adb9-2b29d799dc13_500.jpg'),(43,'Canned peas',1,11,'https://cashcow-cdn.azureedge.net/images/119a0e09-b1e1-4036-babe-cb87fc5f885a.jpg'),(44,'Canned corn',1,7,'https://d3m9l0v76dty0.cloudfront.net/system/photos/4925050/original/329c36a72c0ddae2bacec4f083da6b13.jpg'),(45,'Canned beans',1,11,'https://fruity-land.co.il/wp-content/uploads/2020/07/product449_image1_2020-05-13_23-47-50.jpg'),(46,'Canned hot pepper',1,9,'https://www.shefab.co.il/files/products/product413_image1_2020-05-13_23-44-55.jpg'),(47,'Canned plums',1,6,'https://gcimages.mysupermarket.co.il/products/60/015260.jpg?v=87'),(48,'Hearts of palm',1,7,'https://s3.eu-central-1.amazonaws.com/images-il.rexail.com/images/products/e129154add938d8aff19d2bf83060403.jpg'),(49,'bread',1,8,'https://www.einbar.co.il/wp-content/uploads/2020/08/%D7%9C%D7%97%D7%9D-%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%9C%D7%90%D7%AA%D7%A8.jpg'),(50,'Crackers',1,24,'https://m.pricez.co.il/ProductPictures/7290000074696.jpg'),(51,'Bamba',6,4,'https://osemcat.signature-it.com/images/Fittings/osem-hq/Upload_Pictures/Prod_Pic/6919901/Catalog/6919901_7290000066318_L_Enlarge.jpg'),(52,'Beasley',6,3,'https://whattoeat.co.il/wp-content/uploads/2021/03/%D7%91%D7%99%D7%A1%D7%9C%D7%99-%D7%92%D7%A8%D7%99%D7%9C-%D7%90%D7%9C%D7%A8%D7%92%D7%A0%D7%99%D7%9D.jpg'),(53,'Corn snack',6,5,'https://superpharmstorage.blob.core.windows.net/hybris/products/mobile/medium/7290000066332.jpg'),(54,'Yeast cake',6,22,'https://shimrit.co.il/wp-content/uploads/2017/06/sh_pic2.jpg'),(55,'Butter cookies',6,12,'https://metukimil.co.il/wp-content/uploads/2021/06/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%97%D7%9E%D7%90%D7%94-%D7%A4%D7%A8%D7%99%D7%9B%D7%95%D7%AA-%D7%94%D7%9B%D7%99-%D7%A4%D7%A9%D7%95%D7%98%D7%95%D7%AA-%D7%A0%D7%99%D7%A8%D7%99%D7%AA-%D7%A7%D7%95%D7%A7%D7%95-1.jpg'),(56,'Milk Chocolate',6,6,'https://www.elite.co.il/wp-content/uploads/2021/01/Para.png'),(57,'Dark Chocolate',6,8,'https://eshbal.com/wp-content/uploads/2021/04/%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93_%D7%9E%D7%A8%D7%99%D7%A8.jpg'),(58,'Ferrara Rorsha chocolate',6,25,'https://kanyonmamtakim.co.il/wp-content/uploads/2019/04/FER-300x260.jpg'),(59,'snack',6,4,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/WDK52_L_P_7290106524439_1.png'),(60,'Klick',6,12,'https://www.mashkar.co.il/files/catalog/item/thumbsrc/13495113520.png');
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

-- Dump completed on 2022-02-09 21:47:03
