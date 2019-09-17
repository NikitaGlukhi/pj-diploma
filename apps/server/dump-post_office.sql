-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: post_office
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cityName` varchar(255) NOT NULL,
  `postIndex` varchar(5) NOT NULL,
  `countryId` char(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_990b8a57ab901cb812e2b52fcf0` (`countryId`),
  CONSTRAINT `FK_990b8a57ab901cb812e2b52fcf0` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Vinnitsa','21000','UA'),(2,'Dnepropetrovsk','49000','UA'),(3,'Donetsk','83000','UA'),(4,'Zhytomyr','10000','UA'),(5,'Zaporizhzhya','69000','UA'),(6,'Ivano-Frankivsk','76000','UA'),(7,'Kiev','01000','UA'),(8,'Kirovograd','25000','UA'),(9,'Lugansk','91000','UA'),(10,'Lutsk','43000','UA'),(11,'Lviv','79000','UA'),(12,'Nikolaev','54000','UA'),(13,'Odessa','65000','UA'),(14,'Poltava','36000','UA'),(15,'Rovno','33000','UA'),(16,'Simferopol','95000','UA'),(17,'Sumy','40000','UA'),(18,'Ternopil','46000','UA'),(19,'Uzhhorod','88000','UA'),(20,'Kharkov','61000','UA'),(21,'Kherson','73000','UA'),(22,'Khmelnitsky','29000','UA'),(23,'Cherkasy','18000','UA'),(24,'Chernihiv','14000','UA'),(25,'Chernivtsi','58000','UA');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `id` char(3) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES ('UA','Ukraine');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `office`
--

DROP TABLE IF EXISTS `office`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `office` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `officeNumber` int(11) NOT NULL,
  `coords` text,
  `director` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `cityId` int(11) NOT NULL,
  `maxParcelWeight` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c537becf77897c828e5e3ebf1a5` (`cityId`),
  CONSTRAINT `FK_c537becf77897c828e5e3ebf1a5` FOREIGN KEY (`cityId`) REFERENCES `city` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `office`
--

LOCK TABLES `office` WRITE;
/*!40000 ALTER TABLE `office` DISABLE KEYS */;
INSERT INTO `office` VALUES (1,'Gonti Street, 19',13,'{\"lat\": 49.25, \"lng\": 28.48}','Sergio Mathews','0800-500-608',1,'Not Limited'),(2,'Pushkin Street, 10',8,'{\"lat\": 49.23, \"lng\": 28.47}','Jaqueline Glover','0800-500-607',1,'Not Limited'),(3,'Princes of Koriatovich Street, 181a',18,'{\"lat\": 49.22, \"lng\": 28.46}','Kierra Haynes','0800-500-606',1,'30'),(4,'Keletska Street, 89',5,'{\"lat\": 49.22, \"lng\": 28.41}','Natalee Lam','0800-500-605',1,'Not Limited'),(5,'Marshal Malinowski Street, 2',63,'{\"lat\": 48.48, \"lng\": 35.06}','Cecelia Oneill','0800-500-604',2,'50'),(6,'Slobozhansky Avenue, 6',11,'{\"lat\": 48.49, \"lng\": 35.07}','Gia Rodriguez','0800-500-603',2,'Not Limited'),(7,'Vladimir Vernadsky street, 10',32,'{\"lat\": 48.46, \"lng\": 35.06}','Ana Knapp','0800-500-602',2,'Not Limited'),(8,'Academic Yangel Street, 40',2,'{\"lat\": 48.42, \"lng\": 35.0}','Urijah Francis','0800-500-601',2,'Not Limited');
/*!40000 ALTER TABLE `office` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-17 17:20:15
