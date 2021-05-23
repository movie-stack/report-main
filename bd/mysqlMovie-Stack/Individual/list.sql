-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Maio-2021 às 16:53
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `movie-stack`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) NOT NULL,
  `creation_date` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `list`
--

INSERT INTO `list` (`id`, `name`, `description`, `creation_date`, `userId`) VALUES
(1, 'Comedy', 'Comedy List', '2021-05-23 09:50:17', 1),
(2, 'Action', 'Action List', '2021-05-23 11:55:00', 1),
(3, 'Fantasy', 'Fantasy List', '2021-05-23 10:49:14', 3),
(4, 'Crime', 'Crime List', '2021-05-23 10:52:06', 3),
(5, 'Drama', 'Drama List', '2021-05-23 10:53:26', 1),
(6, 'History', 'History list', '2021-05-23 10:53:41', 1),
(7, 'Horror', 'Horror list', '2021-05-23 10:54:54', 2),
(8, 'Family', 'Family list', '2021-05-23 10:56:26', 1),
(9, 'Thriller', 'Thriller list', '2021-05-23 10:57:01', 1),
(10, 'Animation', 'Animation list', '2021-05-23 10:57:25', 2),
(11, 'Romance', 'Romance list', '2021-05-23 10:58:50', 1),
(12, 'Sci-Fi', 'Sci-Fi list', '2021-05-23 10:59:10', 3),
(13, 'Adventure', 'Adventure list', '2021-05-23 11:01:58', 2),
(14, 'My favorite', 'My favorite list', '2021-05-23 11:01:58', 3);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
