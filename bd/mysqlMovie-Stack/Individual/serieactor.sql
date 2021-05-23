-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Maio-2021 às 16:54
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
-- Estrutura da tabela `serieactor`
--

CREATE TABLE `serieactor` (
  `id` int(11) NOT NULL,
  `serieId` int(11) DEFAULT NULL,
  `actorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `serieactor`
--

INSERT INTO `serieactor` (`id`, `serieId`, `actorId`) VALUES
(1, 1, 2),
(2, 2, 20),
(3, 3, 21),
(4, 4, 22),
(5, 5, 23),
(6, 6, 24),
(7, 7, 25),
(8, 8, 26),
(9, 10, 27),
(10, 11, 28),
(11, 12, 29),
(12, 13, 19),
(13, 14, 30),
(14, 15, 31),
(15, 16, 32),
(16, 17, 33);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `serieactor`
--
ALTER TABLE `serieactor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `serieactor`
--
ALTER TABLE `serieactor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
