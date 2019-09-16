-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 16, 2019 at 10:33 AM
-- Server version: 5.7.25
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `projeto-final`
--

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20190915112543_tabela_perfis.js', 1, '2019-09-16 07:49:30'),
(2, '20190915112548_tabela_usuarios.js', 1, '2019-09-16 07:50:00'),
(3, '20190915112553_tabela_usuario_perfil.js', 1, '2019-09-16 07:50:22'),
(5, '20190915203112_tabela_repositorios.js', 2, '2019-09-16 08:20:11');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `perfis`
--

CREATE TABLE `perfis` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `rotulo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perfis`
--

INSERT INTO `perfis` (`id`, `nome`, `rotulo`) VALUES
(1, 'comum', 'Comum'),
(2, 'admin', 'Administrador');

-- --------------------------------------------------------

--
-- Table structure for table `repositorios`
--

CREATE TABLE `repositorios` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_repositorio` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `forks` varchar(255) DEFAULT NULL,
  `issues` varchar(255) DEFAULT NULL,
  `stargazers` varchar(255) DEFAULT NULL,
  `subscribers` varchar(255) DEFAULT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `repositorios`
--

INSERT INTO `repositorios` (`id`, `id_repositorio`, `name`, `full_name`, `url`, `description`, `language`, `forks`, `issues`, `stargazers`, `subscribers`, `data_criacao`) VALUES
(1, '140893907', 'giandalpont.github.io', 'giandalpont/giandalpont.github.io', 'https://github.com/giandalpont/giandalpont.github.io', 'Website Portifolio', 'HTML', NULL, NULL, NULL, NULL, '2019-09-16 08:25:16');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(60) DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `ativo`, `data_criacao`) VALUES
(1, 'Gian Dal Pont', 'giandalpont@gmail.com', '$2a$10$OGNH1c8IajYQCU155AUuiOUidhL/bVyqe8dZfz2B78LuK8ajoReh2', 1, '2019-09-15 00:24:42'),
(2, 'Gian Teste', 'gia@gian.com', '$2a$10$5TSdCicbMDdf7zGRW3rdBO0ncUbal18TDmZeMF8b/oYoB5ANQIv6i', 1, '2019-09-15 17:47:02');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_perfis`
--

CREATE TABLE `usuarios_perfis` (
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `perfil_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios_perfis`
--

INSERT INTO `usuarios_perfis` (`usuario_id`, `perfil_id`) VALUES
(1, 1),
(2, 1),
(1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `perfis`
--
ALTER TABLE `perfis`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `perfis_nome_unique` (`nome`);

--
-- Indexes for table `repositorios`
--
ALTER TABLE `repositorios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_email_unique` (`email`);

--
-- Indexes for table `usuarios_perfis`
--
ALTER TABLE `usuarios_perfis`
  ADD PRIMARY KEY (`usuario_id`,`perfil_id`),
  ADD KEY `usuarios_perfis_perfil_id_foreign` (`perfil_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `perfis`
--
ALTER TABLE `perfis`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `repositorios`
--
ALTER TABLE `repositorios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usuarios_perfis`
--
ALTER TABLE `usuarios_perfis`
  ADD CONSTRAINT `usuarios_perfis_perfil_id_foreign` FOREIGN KEY (`perfil_id`) REFERENCES `perfis` (`id`),
  ADD CONSTRAINT `usuarios_perfis_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
