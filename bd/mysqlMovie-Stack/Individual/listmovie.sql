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
-- Estrutura da tabela `listmovie`
--

CREATE TABLE `listmovie` (
  `id` int(11) NOT NULL,
  `movieId` int(11) DEFAULT NULL,
  `listId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `listmovie`
--

INSERT INTO `listmovie` (`id`, `movieId`, `listId`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 2),
(4, 4, 2),
(5, 5, 2),
(6, 6, 2),
(7, 7, 9),
(8, 8, 2),
(9, 9, 2),
(10, 10, 1),
(11, 11, 2),
(12, 12, 2),
(13, 13, 1),
(14, 14, 10),
(15, 15, 2),
(16, 16, 2),
(17, 17, 1),
(18, 18, 11),
(19, 19, 12),
(20, 20, 5),
(21, 21, 12),
(22, 16, 14),
(23, 14, 14),
(24, 5, 14);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `listmovie`
--
ALTER TABLE `listmovie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `listmovie`
--
ALTER TABLE `listmovie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
