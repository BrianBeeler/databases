DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `userId` INT NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`)
);

-- ---
-- Table 'Rooms'
--
-- ---

-- DROP TABLE IF EXISTS `Rooms`;

-- CREATE TABLE `Rooms` (
--   `roomId` INT NULL AUTO_INCREMENT DEFAULT NULL,
--   `roomname` VARCHAR(100) NULL DEFAULT NULL,
--   PRIMARY KEY (`roomId`)
-- );

-- ---
-- Table 'Friendships'
--
-- ---

DROP TABLE IF EXISTS `Friendships`;

CREATE TABLE `Friendships` (
  `id` INT NULL AUTO_INCREMENT DEFAULT NULL,
  `selectorID` INT NULL DEFAULT NULL,
  `selecteeID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE `Messages` (
  `messageId` INT NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(140) NULL DEFAULT NULL,
  `userId` INT NULL DEFAULT NULL,
  `roomname` VARCHAR(30) NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`messageId`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Friendships` ADD FOREIGN KEY (selectorID) REFERENCES `Users` (`userId`);
ALTER TABLE `Friendships` ADD FOREIGN KEY (selecteeID) REFERENCES `Users` (`userId`);
ALTER TABLE `Messages` ADD FOREIGN KEY (userId) REFERENCES `Users` (`userId`);
-- ALTER TABLE `Messages` ADD FOREIGN KEY (roomId) REFERENCES `Rooms` (`roomId`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Friendships` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`userId`,`username`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`roomId`,`roomname`) VALUES
-- ('','');
-- INSERT INTO `Friendships` (`id`,`selectorID`,`selecteeID`) VALUES
-- ('','','');
-- INSERT INTO `Messages` (`messageId`,`text`,`userId`,`roomId`,`createdAt`) VALUES
-- ('','','','','');
