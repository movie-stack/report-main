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
-- Estrutura da tabela `serie`
--

CREATE TABLE `serie` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `release_date` datetime NOT NULL,
  `rating` int(11) NOT NULL,
  `genre` varchar(512) NOT NULL,
  `seasons` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `serie`
--

INSERT INTO `serie` (`id`, `name`, `release_date`, `rating`, `genre`, `seasons`) VALUES
(1, 'Prison Break', '2005-08-29 00:00:00', 9, 'Action', 5),
(2, 'Breaking Bad', '2008-01-20 00:00:00', 10, 'Action', 5),
(3, 'Game of Thrones', '2011-04-17 00:00:00', 9, 'Fantasy', 8),
(4, 'Barry', '2018-03-06 00:00:00', 8, 'Crime', 2),
(5, 'Arrow', '2012-10-02 00:00:00', 8, 'Drama', 8),
(6, 'Dexter', '2008-01-20 00:00:00', 9, 'Crime', 8),
(7, 'Mr Pickles', '2014-07-11 00:00:00', 8, 'Comedy', 4),
(8, 'Shameless', '2011-01-09 00:00:00', 8, 'Drama', 11),
(10, 'Vikings', '2013-03-03 00:00:00', 8, 'History', 5),
(11, 'Stranger Things', '2016-07-15 00:00:00', 9, 'Adventure', 3),
(12, 'Dark', '2017-12-17 00:00:00', 9, 'Fantasy', 3),
(13, 'Peaky Blinders', '2013-07-12 00:00:00', 9, 'Drama', 6),
(14, 'The Walking Dead', '2010-10-20 00:00:00', 8, 'Horror', 10),
(15, 'Lucifer', '2016-01-25 00:00:00', 8, 'Action', 5),
(16, 'Family Guy', '1999-01-31 00:00:00', 8, 'Family', 19),
(17, 'Lost', '2004-07-12 00:00:00', 8, 'Adventure', 6);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `serie`
--
ALTER TABLE `serie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `serie`
--
ALTER TABLE `serie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
