-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Maio-2021 às 15:39
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
(32, 'Seth MacFarlane', '1973-10-27 00:00:00', 'Male');

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `listserie`
--

CREATE TABLE `listserie` (
  `id` int(11) NOT NULL,
  `listId` int(11) DEFAULT NULL,
  `serieId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `listserie`
--

INSERT INTO `listserie` (`id`, `listId`, `serieId`) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 4, 6),
(7, 1, 7),
(8, 5, 8),
(10, 6, 10),
(11, 13, 11),
(12, 3, 12),
(13, 5, 13),
(14, 7, 14),
(15, 2, 15),
(16, 8, 16),
(17, 14, 12),
(18, 14, 7);

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
(21, '28 Days Later', '2003-03-21 00:00:00', 8, 'Sci-Fi');

-- --------------------------------------------------------

--
-- Estrutura da tabela `movieactor`
--

CREATE TABLE `movieactor` (
  `id` int(11) NOT NULL,
  `movieId` int(11) DEFAULT NULL,
  `actorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `movieactor`
--

INSERT INTO `movieactor` (`id`, `movieId`, `actorId`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 4),
(4, 4, 5),
(5, 5, 6),
(6, 5, 7),
(7, 6, 7),
(8, 7, 8),
(9, 8, 9),
(10, 9, 10),
(11, 9, 11),
(12, 10, 12),
(13, 11, 13),
(14, 12, 14),
(15, 14, 15),
(16, 15, 16),
(17, 16, 16),
(18, 17, 18),
(19, 18, 18),
(20, 19, 18),
(21, 20, 18),
(22, 21, 19);

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
(16, 'Family Guy', '1999-01-31 00:00:00', 8, 'Family', 19);

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
(15, 16, 32);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `password` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `verified`, `password`) VALUES
(1, 'Simao', 'simao@gmail.com', 1, '123'),
(2, 'Rui', 'rui@gmail.com', 1, '1234'),
(3, 'Pedro', 'pedro@gmail.com', 0, '1234');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `listmovie`
--
ALTER TABLE `listmovie`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `listserie`
--
ALTER TABLE `listserie`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `movieactor`
--
ALTER TABLE `movieactor`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `serie`
--
ALTER TABLE `serie`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `serieactor`
--
ALTER TABLE `serieactor`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `actor`
--
ALTER TABLE `actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `listmovie`
--
ALTER TABLE `listmovie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `listserie`
--
ALTER TABLE `listserie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `movieactor`
--
ALTER TABLE `movieactor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `serie`
--
ALTER TABLE `serie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `serieactor`
--
ALTER TABLE `serieactor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
