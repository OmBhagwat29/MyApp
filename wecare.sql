-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2022 at 02:00 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wecare`
--

-- --------------------------------------------------------

--
-- Table structure for table `campaign`
--

CREATE TABLE `campaign` (
  `id` int(255) NOT NULL,
  `uid` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `link` varchar(255) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `approve` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `campaign`
--

INSERT INTO `campaign` (`id`, `uid`, `title`, `description`, `link`, `uname`, `approve`) VALUES
(6, 13, 'My Title', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', 'https://source.unsplash.com/OGOWDVLbMSc/500x350', 'aditya', 1),
(7, 15, 'Lorem Ipsum is simply dummy text', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.', 'https://source.unsplash.com/ocAuPlfZXEc/500x350', 'shreyas', 1),
(8, 16, 'My campaign', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', 'https://source.unsplash.com/mfB1B1s4sMc/500x350', 'abc', 1),
(15, 68, 'My new campaign', 'Description of my new campaign', 'https://source.unsplash.com/1SAnrIxw5OY/500x350', 'new', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `status` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `pass`, `status`) VALUES
(11, 'om', 'om@123.com', '$2b$10$Sv4JixbrBp6LFPOROmNvXu5QA.sjiMeZKi3nIOpBYPrXTFdzRVne6', 0),
(13, 'aditya', 'aditya@123.com', '$2b$10$YxbWbI.7.qaZVWZVjXfuEORgo2jJkDx4q3vwsplUZbgc6GzSh6hOW', 0),
(16, 'abc', 'abc@123.com', '$2b$10$J5oTglxnh7hNvl90ptiYheCBZEXTg3UMqxpReATGBqVeNN8VYHJni', 0),
(50, 'arpan', 'arpan@123.com', '$2b$10$NtudjHgypqwO3zmT8VfHHeKVNNnZfuKn9e.fXyd1q3DQBrs2vt3OS', 0),
(54, 'Demo ', 'demo@123.com', '$2b$10$jtg6m.K6gHRNjm2ybA5FMulWWLkS3H9HeEIlqUmBHSDfZub7KcWAm', 0),
(55, 'kaustubh', 'k@123.com', '$2b$10$Y.nI7tYSOBu5.e6A9hf7yue7pmFLZpCHWTBiNd2ZBcu.UFndYKHqi', 0),
(56, 'Admin', 'admin@123.com', '$2b$10$WlUbwGxE9EpOO5hQp39JY.cvEOfV0NCaGdS7kF8GzGPGIsgYWg.BC', 1),
(58, 'myuser', 'my@user.com', '$2b$10$ZdEanhmbJEiuks0TXm6al.o9Hg5EM6Zu3RHeGLxiS/8we4h.AuhaO', 0),
(67, 'om', 'om@om.com', '$2b$10$oDauttH0zWsHiTr/RVl.4ughJY9JxJ4BLyl6lz5MZa.gO3SUGpdfe', 0),
(68, 'new', 'new@user.com', '$2b$10$/Lz5..5FiAskr39aXkpqUehSDLixEcpSsUm0terqTrJW1SdoRhpRG', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaign`
--
ALTER TABLE `campaign`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campaign`
--
ALTER TABLE `campaign`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
