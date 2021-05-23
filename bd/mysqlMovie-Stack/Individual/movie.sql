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
-- Estrutura da tabela `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `release_date` datetime NOT NULL,
  `rating` int(11) NOT NULL,
  `genre` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `movie`
--

INSERT INTO `movie` (`id`, `name`, `release_date`, `rating`, `genre`) VALUES
(1, 'Scary Movie', '2000-10-13 00:00:00', 7, 'Comedy'),
(2, 'Mortal Kombat', '2021-04-07 00:00:00', 7, 'Action'),
(3, 'Without Remorse Tom Clancy', '2021-04-29 00:00:00', 7, 'Action'),
(4, 'Godzilla vs. Kong', '2021-03-24 00:00:00', 8, 'Action'),
(5, 'Justice League', '2021-03-18 00:00:00', 8, 'Action'),
(6, 'Wonder-women 1984', '2020-12-16 00:00:00', 8, 'Action'),
(7, 'Joker', '2019-10-02 00:00:00', 9, 'Thriller'),
(8, 'Venom', '2018-09-28 00:00:00', 7, 'Action'),
(9, 'Avangers: Endgame ', '2019-04-24 00:00:00', 9, 'Action'),
(10, 'Jumanji', '2019-12-04 00:00:00', 6, 'Comedy'),
(11, 'Spider-Man: Far from home', '2019-06-28 00:00:00', 8, 'Action'),
(12, 'John Wick 3', '2019-05-15 00:00:00', 9, 'Action'),
(13, 'Shazam', '2019-03-29 00:00:00', 7, 'Comedy'),
(14, 'Shrek', '2001-05-18 00:00:00', 9, 'Animation'),
(15, 'Deadpool 2', '2018-05-10 00:00:00', 8, 'Action'),
(16, 'Deadpool', '2016-02-09 00:00:00', 9, 'Action'),
(17, 'Wolf of Wallstreet', '2014-01-09 00:00:00', 9, 'Comedy'),
(18, 'Titanic', '1997-12-19 00:00:00', 9, 'Romance'),
(19, 'Inception', '2010-07-16 00:00:00', 9, 'Sci-Fi'),
(20, 'Once Upon a Time in Hollywood', '2019-08-15 00:00:00', 7, 'Drama'),
(21, '28 Days Later', '2003-03-21 00:00:00', 8, 'Sci-Fi'),
(22, 'Who am I', '2014-09-25 00:00:00', 10, 'Crime');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
