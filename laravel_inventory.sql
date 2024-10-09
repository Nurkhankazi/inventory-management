-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2024 at 11:05 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_products`
--

CREATE TABLE `add_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `addproduct` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `price` decimal(6,2) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `add_products`
--

INSERT INTO `add_products` (`id`, `addproduct`, `description`, `quantity`, `price`, `category`, `created_at`, `updated_at`) VALUES
(1, 'Tab', 'IDB', '1', '5000.00', 'Electronics', '2024-10-02 03:27:29', '2024-10-02 03:27:29'),
(2, 'watch', 'IDB', '1', '5000.00', 'Electronics', '2024-10-02 03:57:31', '2024-10-02 03:57:31'),
(3, 'Headphone', 'IDB', '1', '5000.00', 'Electronics', '2024-10-08 02:12:56', '2024-10-08 02:12:56'),
(6, 'nnndsf', 'Student Of ISDB', '1', '6000.00', 'Mens', '2024-10-09 00:35:54', '2024-10-09 00:35:54');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_10_02_084309_create_add_products_table', 2),
(6, '2024_10_09_070720_create_orders_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `orderitem` varchar(255) NOT NULL,
  `orderquantity` int(11) DEFAULT NULL,
  `orderprice` decimal(8,2) DEFAULT NULL,
  `ordernotes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'hosp', 'fb948f4a7ca29cbd699d6407a10323adcc3bcabc67894f8c88fbd44dc3eb005f', '[\"*\"]', NULL, NULL, '2024-09-30 23:31:15', '2024-09-30 23:31:15'),
(2, 'App\\Models\\User', 1, 'hosp', '82d520dc6eff9080060e09a983c0cc785c56134623a027b810ccded172aa1acb', '[\"*\"]', NULL, NULL, '2024-10-01 00:15:59', '2024-10-01 00:15:59'),
(3, 'App\\Models\\User', 1, 'hosp', 'cc6383146583ebdc4400699b433500acf3f08ea7a135753493d650fca30f24f7', '[\"*\"]', NULL, NULL, '2024-10-01 00:46:54', '2024-10-01 00:46:54'),
(4, 'App\\Models\\User', 1, 'hosp', 'cdac4f2c524a66a54025e90588076f7c70958381d3566beb31be65f39caf8d3f', '[\"*\"]', NULL, NULL, '2024-10-01 00:48:59', '2024-10-01 00:48:59'),
(5, 'App\\Models\\User', 1, 'hosp', '47c42ff60f714e16ebde324f2f7ffe2c723bbcd18a38178341242a8e446e2a09', '[\"*\"]', NULL, NULL, '2024-10-01 00:52:47', '2024-10-01 00:52:47'),
(6, 'App\\Models\\User', 2, 'hosp', 'f01208af3f777dbf5a9bc97eeed761f3c3661eb6085fb0fe1e9dd6d4646cd8f0', '[\"*\"]', NULL, NULL, '2024-10-01 01:05:01', '2024-10-01 01:05:01'),
(7, 'App\\Models\\User', 2, 'hosp', 'e645a3f0c1ba70c645c66cbd6c58e61b7843bd55803c32974ec4aa5f06424d23', '[\"*\"]', NULL, NULL, '2024-10-01 21:52:23', '2024-10-01 21:52:23'),
(8, 'App\\Models\\User', 2, 'hosp', '9ed293784e240c1f12f59b81c8240b315cf707d1bf3abf4151c3aec9172ca89a', '[\"*\"]', NULL, NULL, '2024-10-02 04:32:02', '2024-10-02 04:32:02'),
(9, 'App\\Models\\User', 1, 'hosp', '858be93e20097476f8bb499e38524aeecc23f2774e28e23283930cd4335b266d', '[\"*\"]', NULL, NULL, '2024-10-02 21:18:36', '2024-10-02 21:18:36'),
(10, 'App\\Models\\User', 3, 'hosp', '34b106e3f06c21db9bfa773f51c3e1dbe7b7b7f4d122c404244750320d2d44f6', '[\"*\"]', NULL, NULL, '2024-10-02 21:27:54', '2024-10-02 21:27:54'),
(11, 'App\\Models\\User', 3, 'hosp', '547721e1b45407a8b0fb0d51003ee46fbfe1524ea7e0ad074b58fce8f30e8cf3', '[\"*\"]', NULL, NULL, '2024-10-02 22:09:54', '2024-10-02 22:09:54'),
(12, 'App\\Models\\User', 3, 'hosp', '1f9619c3d1da22e81404722a298d81d8057290ec88ab0aa190c25d5457da057b', '[\"*\"]', NULL, NULL, '2024-10-02 22:11:24', '2024-10-02 22:11:24'),
(13, 'App\\Models\\User', 3, 'hosp', 'f8e0181c1c72f1b336914008e2860ac5738e5291d15ed1369ba85480c90d5702', '[\"*\"]', NULL, NULL, '2024-10-02 22:16:29', '2024-10-02 22:16:29'),
(14, 'App\\Models\\User', 3, 'hosp', 'a137c16189ea3079370b84608b3d5e1509bf45d163db156ecc997c14f675ee0d', '[\"*\"]', NULL, NULL, '2024-10-02 22:32:20', '2024-10-02 22:32:20'),
(15, 'App\\Models\\User', 3, 'hosp', '8eac49108362bd36714f737819c144f3a6a5a4dd710ae4add48787c3757ed0b8', '[\"*\"]', NULL, NULL, '2024-10-02 23:15:33', '2024-10-02 23:15:33'),
(16, 'App\\Models\\User', 3, 'hosp', '9261b6a8bdaca9c2b977e487f648b4fa26815bcdf03b23a34305e3334bd667a0', '[\"*\"]', NULL, NULL, '2024-10-02 23:32:41', '2024-10-02 23:32:41'),
(17, 'App\\Models\\User', 3, 'hosp', '78e34f208e065dc5aabaa94bad63c9931eb17a5b92c6933f53dfafc957774711', '[\"*\"]', NULL, NULL, '2024-10-03 00:21:07', '2024-10-03 00:21:07'),
(18, 'App\\Models\\User', 3, 'hosp', '7fa375e9499208f22561e5e5e5a8cce37ba0768eb649c1cbf30ec935a7fcbd92', '[\"*\"]', NULL, NULL, '2024-10-03 00:52:50', '2024-10-03 00:52:50'),
(19, 'App\\Models\\User', 4, 'hosp', 'bf26367e075e51a7427e193751c199c43343be7ad5d56bbedc9547b254f36c22', '[\"*\"]', NULL, NULL, '2024-10-03 00:59:21', '2024-10-03 00:59:21'),
(20, 'App\\Models\\User', 5, 'hosp', '9cb76208590ca701f540621fc8320815dbad7938b3325f8233d88dac22e78f93', '[\"*\"]', NULL, NULL, '2024-10-03 01:24:46', '2024-10-03 01:24:46'),
(21, 'App\\Models\\User', 6, 'hosp', 'b25af4d72af2702150f64cee761eba0ca20a3120e33ddd3e01ce70f3e1ba7d03', '[\"*\"]', NULL, NULL, '2024-10-03 01:29:03', '2024-10-03 01:29:03'),
(22, 'App\\Models\\User', 7, 'hosp', '5ec2aaa4bfa46cac37a7b1edbd98f5442881c94ba3a2f478612486c918a3d37e', '[\"*\"]', NULL, NULL, '2024-10-03 01:31:33', '2024-10-03 01:31:33'),
(23, 'App\\Models\\User', 7, 'hosp', '38cc5f543f0194f13a1309ac50c1c87fd59fcdab496cf5100109e3a53cbe62b7', '[\"*\"]', NULL, NULL, '2024-10-03 01:31:57', '2024-10-03 01:31:57'),
(24, 'App\\Models\\User', 3, 'hosp', '571e09d74c7e3c0feecdd2070762c220b07f4f8230803a5e600fe6e959ccf965', '[\"*\"]', NULL, NULL, '2024-10-03 01:37:39', '2024-10-03 01:37:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'kamal', 'kamal123@gmail.com', NULL, '$2y$12$bSEryZ8vWN0QrPAXMSJT1OJWIbu4B56tCIZuG.rSZ3XiE9GEYPDb.', NULL, '2024-09-30 23:31:15', '2024-09-30 23:31:15'),
(2, 'kamal', 'kamal@gmail.com', NULL, '$2y$12$7.lMSFRiYhK7.qnLBjVLxe2uVru4Zn7rBB5S/zo3UmB2arAhCAPrO', NULL, '2024-10-01 01:05:01', '2024-10-01 01:05:01'),
(3, 'Nurkhan', 'nurkhan@gmail.com', NULL, '$2y$12$4o2hrwfg0x5RsuZKb6mIyOzBo.QIy/g9tz9qehVztfz/H8V9896MG', NULL, '2024-10-02 21:27:54', '2024-10-02 21:27:54'),
(4, 'nur', 'nur@gmail.com', NULL, '$2y$12$akrpBe2xH7CKlBo4Feal1Ov2yxjgOAGkegtLfgxhZ14/O1UcAEnfq', NULL, '2024-10-03 00:59:21', '2024-10-03 00:59:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_products`
--
ALTER TABLE `add_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_products`
--
ALTER TABLE `add_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
