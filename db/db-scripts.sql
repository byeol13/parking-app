CREATE DATABASE  IF NOT EXISTS `parking_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `parking_db`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: parking_db
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `registration_date` date DEFAULT NULL,
  `is_regular_custo` char(1) DEFAULT NULL,
  `contact_number` int DEFAULT NULL,
  `first_name` varchar(250) DEFAULT NULL,
  `last_name` varchar(250) DEFAULT NULL,
  `billing_address` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parking_lot_id` int DEFAULT NULL,
  `issued_on` date DEFAULT NULL,
  `valid_till` date DEFAULT NULL,
  `booking_date_from` date DEFAULT NULL,
  `booking_date_till` date DEFAULT NULL,
  `discount_in_percentage` int DEFAULT NULL,
  `max_amount_offer` int DEFAULT NULL,
  `discount_in_amount` int DEFAULT NULL,
  `offer_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parking_lot_id_idx` (`parking_lot_id`),
  CONSTRAINT `parking_lot_id` FOREIGN KEY (`parking_lot_id`) REFERENCES `parking_lot` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_lot`
--

DROP TABLE IF EXISTS `parking_lot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parking_lot` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number_of_blocks` int DEFAULT NULL,
  `is_slot_available` char(1) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `is_reentry_allowed` char(1) DEFAULT NULL,
  `operating_company_n` varchar(100) DEFAULT NULL,
  `is_valet_parking_available` char(1) DEFAULT NULL,
  `operational_in_night` char(1) DEFAULT NULL,
  `minimum_hr_to_pay` int DEFAULT NULL,
  `is_monthly_pass_allow` char(1) DEFAULT NULL,
  `monthly_pass_cost` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_lot`
--

LOCK TABLES `parking_lot` WRITE;
/*!40000 ALTER TABLE `parking_lot` DISABLE KEYS */;
/*!40000 ALTER TABLE `parking_lot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_monthly_pass`
--

DROP TABLE IF EXISTS `parking_monthly_pass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parking_monthly_pass` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `parking_lot_id` int DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `duration_in_days` int DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  KEY `parking_lot_id` (`parking_lot_id`),
  CONSTRAINT `parking_monthly_pass_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `parking_monthly_pass_ibfk_2` FOREIGN KEY (`parking_lot_id`) REFERENCES `parking_lot` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_monthly_pass`
--

LOCK TABLES `parking_monthly_pass` WRITE;
/*!40000 ALTER TABLE `parking_monthly_pass` DISABLE KEYS */;
/*!40000 ALTER TABLE `parking_monthly_pass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_one_time_reservation`
--

DROP TABLE IF EXISTS `parking_one_time_reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parking_one_time_reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_vehicle_id` int DEFAULT NULL,
  `parking_lot_id` int DEFAULT NULL,
  `start_timestamp` timestamp NULL DEFAULT NULL,
  `pay_for_min_hr` char(1) DEFAULT NULL,
  `booking_for_hr` int DEFAULT NULL,
  `basic_parking_cost` int DEFAULT NULL,
  `offer_code` varchar(10) DEFAULT NULL,
  `net_cost` int DEFAULT NULL,
  `is_paid` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_vehicle_id` (`customer_vehicle_id`),
  KEY `parking_lot_id` (`parking_lot_id`),
  CONSTRAINT `parking_one_time_reservation_ibfk_1` FOREIGN KEY (`customer_vehicle_id`) REFERENCES `vehicle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `parking_one_time_reservation_ibfk_2` FOREIGN KEY (`parking_lot_id`) REFERENCES `parking_lot` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_one_time_reservation`
--

LOCK TABLES `parking_one_time_reservation` WRITE;
/*!40000 ALTER TABLE `parking_one_time_reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `parking_one_time_reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parking_pricing`
--

DROP TABLE IF EXISTS `parking_pricing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parking_pricing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parking_lot_id` int DEFAULT NULL,
  `day_of_week` int DEFAULT NULL,
  `morning_hr_cost` int DEFAULT NULL,
  `midday_hr_cost` int DEFAULT NULL,
  `evening_hr_cost` int DEFAULT NULL,
  `all_day_cost` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parking_lot_id` (`parking_lot_id`),
  CONSTRAINT `parking_pricing_ibfk_1` FOREIGN KEY (`parking_lot_id`) REFERENCES `parking_lot` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parking_pricing`
--

LOCK TABLES `parking_pricing` WRITE;
/*!40000 ALTER TABLE `parking_pricing` DISABLE KEYS */;
/*!40000 ALTER TABLE `parking_pricing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_method`
--

DROP TABLE IF EXISTS `payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_method` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `card_type` char(1) DEFAULT NULL,
  `card_number` int DEFAULT NULL,
  `expiry_month` int DEFAULT NULL,
  `expiry_year` int DEFAULT NULL,
  `security_code` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `payment_method_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricing_exception`
--

DROP TABLE IF EXISTS `pricing_exception`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pricing_exception` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parking_lot_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `morning_hr_cost` int DEFAULT NULL,
  `midday_hr_cost` int DEFAULT NULL,
  `evening_hr_cost` int DEFAULT NULL,
  `all_day_cost` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parking_lot_id` (`parking_lot_id`),
  CONSTRAINT `pricing_exception_ibfk_1` FOREIGN KEY (`parking_lot_id`) REFERENCES `parking_lot` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricing_exception`
--

LOCK TABLES `pricing_exception` WRITE;
/*!40000 ALTER TABLE `pricing_exception` DISABLE KEYS */;
/*!40000 ALTER TABLE `pricing_exception` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `vehicle_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-07 13:20:54
