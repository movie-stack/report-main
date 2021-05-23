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
-- Estrutura da tabela `actor`
--

CREATE TABLE `actor` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `birthdate` datetime NOT NULL,
  `gender` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `actor`
--

INSERT INTO `actor` (`id`, `name`, `birthdate`, `gender`) VALUES
(1, 'Anna Kay Faris', '1976-11-29 00:00:00', 'Female'),
(2, 'Wentworth Miller', '1972-06-02 00:00:00', 'Male'),
(3, 'Lewis Tan', '1987-02-04 00:00:00', 'Male'),
(4, 'Michael B. Jordan', '1987-02-09 00:00:00', 'Male'),
(5, 'Alexander Skarsgård', '1976-08-25 00:00:00', 'Male'),
(6, 'Ben Affleck', '1972-08-15 00:00:00', 'Male'),
(7, 'Gal Gadot', '1985-04-30 00:00:00', 'Female'),
(8, 'Joaquin Phoenix', '1974-10-28 00:00:00', 'Male'),
(9, 'Tom Hardy', '1976-11-29 00:00:00', 'Male'),
(10, 'Robert Downey Jr.', '1965-04-04 00:00:00', 'Male'),
(11, 'Scarlett Johansson', '1984-11-22 00:00:00', 'Female'),
(12, 'Dwayne Johnson', '1972-05-02 00:00:00', 'Male'),
(13, 'Tom Holland', '1996-06-01 00:00:00', 'Male'),
(14, 'Keanu Reeves', '1964-09-02 00:00:00', 'Male'),
(15, 'Mike Myers', '1963-05-25 00:00:00', 'Male'),
(16, 'Ryan Reynolds', '1976-10-23 00:00:00', 'Male'),
(18, 'Leonardo DiCaprio', '1974-11-11 00:00:00', 'Male'),
(19, 'Cillian Murphy', '1976-05-25 00:00:00', 'Male'),
(20, 'Aaron Paul', '1979-08-27 00:00:00', 'Male'),
(21, 'Emilia Clarke', '1986-10-23 00:00:00', 'Female'),
(22, 'Bill Hader', '1978-07-07 00:00:00', 'Male'),
(23, 'Stephen Amell', '1981-05-08 00:00:00', 'Male'),
(24, 'Michael C. Hall', '1971-02-01 00:00:00', 'Male'),
(25, 'Brooke Shields', '1965-05-31 00:00:00', 'Female'),
(26, 'Emmy Rossum', '1986-07-12 00:00:00', 'Female'),
(27, 'Travis Fimmel', '1979-07-15 00:00:00', 'Male'),
(28, 'Millie Bobby Brown', '2004-02-09 00:00:00', 'Female'),
(29, 'Louis Hofmann', '1997-06-03 00:00:00', 'Male'),
(30, 'Andrew Lincoln', '1973-07-14 00:00:00', 'Male'),
(31, 'Tom Ellis', '1978-11-17 00:00:00', 'Male'),
(32, 'Seth MacFarlane', '1973-10-27 00:00:00', 'Male'),
(33, 'Josh Holloway', '1969-06-24 00:00:00', 'Male'),
(34, 'Tom Schilling', '1982-02-10 00:00:00', 'Male');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `actor`
--
ALTER TABLE `actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
