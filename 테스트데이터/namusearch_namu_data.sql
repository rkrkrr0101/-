-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: namusearch
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `namu_data`
--

DROP TABLE IF EXISTS `namu_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `namu_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nd_one` varchar(45) DEFAULT NULL,
  `nd_two` varchar(45) DEFAULT NULL,
  `nd_three` varchar(45) DEFAULT NULL,
  `nd_four` varchar(45) DEFAULT NULL,
  `nd_five` varchar(45) DEFAULT NULL,
  `nd_six` varchar(45) DEFAULT NULL,
  `nd_seven` varchar(45) DEFAULT NULL,
  `nd_eight` varchar(45) DEFAULT NULL,
  `nd_nine` varchar(45) DEFAULT NULL,
  `nd_ten` varchar(45) DEFAULT NULL,
  `nd_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `nd_kind` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `namu_data`
--

LOCK TABLES `namu_data` WRITE;
/*!40000 ALTER TABLE `namu_data` DISABLE KEYS */;
INSERT INTO `namu_data` VALUES (22,'현충일','붉은사슴뿔버섯','범죄도시 2','디아블로 이모탈','윤석열','손석구','전미도','야란','자낳대','카타르 월드컵','2022-06-06 02:55:06','hour');
/*!40000 ALTER TABLE `namu_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-25  2:25:05
