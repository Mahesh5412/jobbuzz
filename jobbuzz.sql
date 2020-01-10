-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 07, 2019 at 02:53 PM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobbuzz`
--

-- --------------------------------------------------------

--
-- Table structure for table `companyDetails`
--

CREATE TABLE `companyDetails` (
  `companyId` int(100) NOT NULL,
  `userId` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `companyEmail` varchar(255) NOT NULL,
  `companyNumber` varchar(255) NOT NULL,
  `companyLocation` varchar(255) NOT NULL,
  `companyVertical` varchar(255) NOT NULL,
  `companyImage` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companyDetails`
--

INSERT INTO `companyDetails` (`companyId`, `userId`, `companyName`, `companyEmail`, `companyNumber`, `companyLocation`, `companyVertical`, `companyImage`) VALUES
(1, 0, 'df', 'dsf', 'vds', '', 'vds', 'data:image/jpeg;base64,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'),
(2, 0, 'df', 'dsf', 'vds', '', 'vds', ''),
(3, 0, 'hg', 'yt', 'ks', '', 'qkyt', ''),
(4, 0, 'cxz', 'cxXS', 'DSA', '', 'KJXC', ''),
(5, 0, 'fg', 'hgd', 'trs', '', 'fsx', ''),
(6, 0, 'df', 'fds', 'fg', '', 'fd', ''),
(7, 24, 'Novisync', 'novisync@gmail.com', '9862873232', 'hyd', 'sdv', 'data:image/jpeg;base64,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'),
(8, 24, 'dv', 'de', 'd', '', 'd', ''),
(9, 24, ' vc', 'fvcd', 'ds', '', 'dac', ''),
(10, 24, 'd', 'ds', 'fvs', '', 'fd', ''),
(11, 24, 'fds', 'dsf', 'sda', '', 'dsa', ''),
(12, 24, 'sfd', 'fds', 'dsf', '', 'sfd', ''),
(13, 24, 'df', 'dwe', 'dw', '', 'dwf', ''),
(14, 24, 'novisync', 'asd', 'asd', '', 'asd', ''),
(16, 31, 'R pvt.ltd', 'Rhardwaj@gmail.com', '8789898989', '', 'IT industries', ''),
(17, 32, 'usya', ',ks', 'saas', '', 'ssa', ''),
(18, 31, 'kjhk', 'lkj', 'lkj', '', 'm', ''),
(19, 24, 'ds', 'ds', 'ad', '', 'de', ''),
(20, 31, 'kjhk', 'lkj', 'gygh', '', 'm', ''),
(21, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(22, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(23, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdvd', ''),
(24, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(25, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(26, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(27, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(28, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(29, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(30, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(31, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(32, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(33, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(34, 47, 'slkfd', 'aa', 'zxc', '', 'sadfsdf', ''),
(35, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(36, 24, 'Novisync', 'novisync@gmail.com', '9862873232', '', 'sdv', ''),
(37, 31, 'R pvt.ltd', 'Rhardwaj@gmail.com', '8789898989', '', 'IT industries', ''),
(38, 31, 'R pvt.ltd', 'Rhardwaj@gmail.com', '8789898989', '', 'IT industries', ''),
(39, 50, 'my company', 'asdf', 'asd', '', 'asd', ''),
(40, 56, 'novi', 'fsldu', 'sdds', '', 'sdf', ''),
(41, 56, 'asd', 'sad', 'sad', '', 'asd', ''),
(42, 56, 'sdsa', 'sad', 'sad', '', 'sfd', ''),
(43, 56, 'dsa', 'sad', 'sad', '', 'ad', ''),
(44, 56, 'dasd', 'ada', 'sad', '', 'sad', ''),
(45, 58, 'ytf', 'tret', 'ytr1tetr', '', 'dyut', ''),
(46, 56, 'novi', 'fsldu', 'sdds', '', 'sdf', ''),
(47, 59, 'novi', 'novi@gmail.com', 'asdf', '', 'asdf', ''),
(48, 51, 'hj', 'hj@gmail.com', '675656', '', 'it', '');

-- --------------------------------------------------------

--
-- Table structure for table `interestedLocations`
--

CREATE TABLE `interestedLocations` (
  `sno` int(11) NOT NULL,
  `userId` int(10) NOT NULL,
  `locationType` varchar(30) NOT NULL,
  `location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `interestedLocations`
--

INSERT INTO `interestedLocations` (`sno`, `userId`, `locationType`, `location`) VALUES
(2, 60, '', 'Ameerpet');

-- --------------------------------------------------------

--
-- Table structure for table `interestedSectors`
--

CREATE TABLE `interestedSectors` (
  `sno` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `sector` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `jobDetails`
--

CREATE TABLE `jobDetails` (
  `jobId` int(10) NOT NULL,
  `jobProfile` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `experienceYearsReq` varchar(255) NOT NULL,
  `companyId` int(11) NOT NULL,
  `vacancies` varchar(255) NOT NULL,
  `annualSalaryLakhs` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `lastDate` date NOT NULL,
  `postedOn` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobDetails`
--

INSERT INTO `jobDetails` (`jobId`, `jobProfile`, `description`, `experienceYearsReq`, `companyId`, `vacancies`, `annualSalaryLakhs`, `startDate`, `lastDate`, `postedOn`) VALUES
(1, 'flutter dev', 'devloper description', '1', 7, '100', '10000', '2019-09-12', '2019-09-15', '2019-09-05 07:35:39'),
(2, 'react developer', 'have good knowledge in htmal css', '1', 7, '100', '20', '2019-09-27', '2019-09-11', '2019-09-05 07:41:06'),
(4, 'react devloper', 'we want good devloper', '1 ', 7, '10', '2 lakhs', '2019-09-10', '2019-09-28', '2019-09-05 10:46:17'),
(5, 'react developer', '', '1', 15, '10', '3 lakhs', '0000-00-00', '0000-00-00', '2019-09-05 11:12:33'),
(6, '', '', '', 16, '', '', '0000-00-00', '0000-00-00', '2019-09-05 14:00:40'),
(7, 'native', 'het', '2 yrs', 7, '50', '3 Lakhs', '2019-09-09', '2019-09-19', '2019-09-06 08:27:10'),
(8, '', '', '', 7, '', '', '0000-00-00', '0000-00-00', '2019-09-06 09:44:55'),
(9, 'bug', 'asd', '2 yrs', 39, '2000', '10 Lakhs', '2019-09-11', '2019-09-17', '2019-09-06 15:00:36'),
(10, 'dasd', 'asd', 'sad', 40, 'asd', 'asd', '2019-10-02', '2019-09-17', '2019-09-06 15:25:06'),
(11, 'dsad', 'sadsa', 'sa', 40, 'sad', 'asd', '2019-09-12', '2019-09-17', '2019-09-06 15:39:30'),
(12, 'asdsa', 'asda', 'safd', 40, 'sda', 'sad', '2019-09-11', '2019-09-17', '2019-09-06 15:40:26'),
(13, 'react', 'thanku', '1 yr', 39, '40', '2 lacks', '2019-09-11', '2019-09-11', '2019-09-06 15:46:14'),
(14, 'xzxZ', 'dsad', 'sdf', 47, 'sfd', 'SDF', '2019-09-04', '2019-09-03', '2019-09-06 15:56:30');

-- --------------------------------------------------------

--
-- Table structure for table `jobRequiredSkills`
--

CREATE TABLE `jobRequiredSkills` (
  `sno` int(10) NOT NULL,
  `jobId` int(10) NOT NULL,
  `skillId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `skillTable`
--

CREATE TABLE `skillTable` (
  `skillId` int(100) NOT NULL,
  `userId` int(11) NOT NULL,
  `skillDomain` varchar(50) NOT NULL,
  `skill` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `skillTable`
--

INSERT INTO `skillTable` (`skillId`, `userId`, `skillDomain`, `skill`) VALUES
(2, 60, '', 'java');

-- --------------------------------------------------------

--
-- Table structure for table `userDetails`
--

CREATE TABLE `userDetails` (
  `sno` int(100) NOT NULL,
  `userId` int(10) NOT NULL,
  `graduation` varchar(100) NOT NULL,
  `gradDate` varchar(100) NOT NULL,
  `college` varchar(100) NOT NULL,
  `university` varchar(100) NOT NULL,
  `visaType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userDetails`
--

INSERT INTO `userDetails` (`sno`, `userId`, `graduation`, `gradDate`, `college`, `university`, `visaType`) VALUES
(43, 60, 'btech', '2019-09-05', '', '', 'a1');

-- --------------------------------------------------------

--
-- Table structure for table `userJobApplication`
--

CREATE TABLE `userJobApplication` (
  `applicationId` int(11) NOT NULL,
  `userId` int(10) NOT NULL,
  `jobId` int(10) NOT NULL,
  `companyId` int(11) NOT NULL,
  `jobStatus` enum('applied','waiting') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userJobApplication`
--

INSERT INTO `userJobApplication` (`applicationId`, `userId`, `jobId`, `companyId`, `jobStatus`) VALUES
(10, 24, 4, 0, 'waiting'),
(11, 24, 2, 0, 'waiting'),
(12, 24, 2, 0, 'waiting'),
(13, 24, 2, 0, 'waiting'),
(14, 24, 1, 0, 'waiting'),
(15, 24, 1, 7, 'waiting'),
(16, 24, 1, 7, 'waiting'),
(17, 0, 1, 7, 'waiting'),
(18, 0, 1, 7, 'waiting'),
(19, 24, 1, 7, 'waiting'),
(20, 24, 2, 7, 'waiting'),
(21, 0, 1, 7, 'waiting'),
(22, 0, 1, 7, 'waiting'),
(23, 0, 1, 7, 'waiting'),
(24, 0, 1, 7, 'waiting'),
(25, 0, 6, 16, 'waiting'),
(26, 0, 1, 7, 'waiting'),
(27, 0, 1, 7, 'waiting'),
(28, 0, 1, 7, 'waiting'),
(29, 0, 4, 7, 'waiting'),
(30, 0, 1, 7, 'waiting');

-- --------------------------------------------------------

--
-- Table structure for table `userRegistration`
--

CREATE TABLE `userRegistration` (
  `userId` int(10) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `mobileNumber` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `type` enum('employee','employer') DEFAULT NULL,
  `registeredTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userRegistration`
--

INSERT INTO `userRegistration` (`userId`, `userName`, `email`, `mobileNumber`, `password`, `status`, `type`, `registeredTime`) VALUES
(24, 'saiteja', 'saitejamogatadakala@gmail.com', '8019562363', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-03 11:59:10'),
(25, 'saiteja', 'saiteja@gmail.com', '8186814487', '81dc9bdb52d04dc20036dbd8313ed055', 'active', 'employee', '2019-09-04 08:46:06'),
(26, 'sethu', 's@gmail.com', '99989878765', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 10:26:38'),
(27, 'narendra', 'narendra.v@novisync.com', '970081007', '7815696ecbf1c96e6894b779456d330e', 'active', 'employee', '2019-09-05 10:44:04'),
(28, 'supriya kanade', 'supriya@gmail.com', '9527043919', 'db1db77c9b9ba85fa2b33e0a9313edf1', 'active', 'employee', '2019-09-05 10:55:57'),
(31, 'hardwaj', 'hardwaj@gmail.com', '123344', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 12:17:47'),
(32, 'spuriya', 'supriya@gmail.com', '1234', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 12:26:58'),
(33, 'rachhu', 'rachhu@gmail.com', '8787', '7815696ecbf1c96e6894b779456d330e', 'active', 'employee', '2019-09-05 14:47:40'),
(34, 'asd', 'as@gmail.com', 'sad', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 15:15:40'),
(35, 'sethu', 'sethu@gmail.com', '998989876', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 15:16:45'),
(36, 'asd', 'dsa@gmail.com', 'asd', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 15:18:27'),
(37, 'asda', 'sad@gmail.com', 'asd', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 15:20:19'),
(38, 'dsfsd', 'asd@gmail.com', 'sad', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 15:20:55'),
(39, 'asd', 'as@gmail.com', 'asd', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 15:22:17'),
(40, 'asd', 'asd@gmail.com', 'asd', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-05 15:29:14'),
(41, 'name', 'name@gmail.com', '8121199999', 'f5bb0c8de146c67b44babbf4e6584cc0', 'active', 'employee', '2019-09-06 06:31:13'),
(42, 'sethu@gmail.com', 'sk@gmail.com', '7657657657', '81dc9bdb52d04dc20036dbd8313ed055', 'active', 'employee', '2019-09-06 07:10:43'),
(43, 'rachana', 'rachana@gmail.com', '98798798', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 07:21:00'),
(44, 'as', 'as@gmail.com', 'sa', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 07:23:26'),
(45, 'adsad', 's@gmail.com', '9898989898', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 08:23:02'),
(46, 'SwathiSusravanthi', 'sravanthi@emil.com', '8187038020', '93064812d4cff119a7c40dc9cb224dda', 'active', 'employee', '2019-09-06 08:26:48'),
(47, 'qwe', 'qwe@gmail.com', '1234', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 08:36:21'),
(48, 'ghj', 'lgh@gmail.com', '1235', '202cb962ac59075b964b07152d234b70', 'active', 'employee', '2019-09-06 11:04:18'),
(49, 'u', 'u@gmail.com', 'ajs0912', '81dc9bdb52d04dc20036dbd8313ed055', 'active', 'employee', '2019-09-06 14:26:02'),
(50, 'employer', 'employer@gmail.com', '88', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 14:51:46'),
(51, 'u', 'u@gmail.com', '1234', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 14:57:22'),
(52, 'supriya', 'supriya@gmail.com', '8830309632', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:16:38'),
(53, 'sup', 'sup@gmail.com', '67565656', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:20:56'),
(54, 'jk', 'jk@gmail.com', '7698', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:23:29'),
(55, 'narendra.v@novisync.com', 's@gmail.com', '78768757565', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:23:32'),
(56, 's@gmail.comk', 'sk@gmail.com', '95270439192', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:24:20'),
(57, 'jj', 'jj@gmail.com', '098987987', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:41:53'),
(58, 'sri', 'sri@gmail.com', '6676', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:48:28'),
(59, 'asd', 'sss@gmail.com', 'asd', 'd41d8cd98f00b204e9800998ecf8427e', 'active', 'employer', '2019-09-06 15:55:43'),
(60, 'sethu', 'ssk@gmail.com', '09788787878', '81dc9bdb52d04dc20036dbd8313ed055', 'active', 'employee', '2019-09-07 05:56:13');

-- --------------------------------------------------------

--
-- Table structure for table `userSkillLevel`
--

CREATE TABLE `userSkillLevel` (
  `sno` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `skillId` int(10) NOT NULL,
  `skillLevel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userSkillLevel`
--

INSERT INTO `userSkillLevel` (`sno`, `userId`, `skillId`, `skillLevel`) VALUES
(26, 19, 3, 'Intermediate'),
(27, 19, 3, 'Intermediate'),
(28, 19, 3, 'Intermediate'),
(29, 19, 3, 'Intermediate'),
(30, 19, 3, 'Intermediate'),
(31, 19, 3, 'Intermediate'),
(32, 19, 3, 'Intermediate'),
(33, 19, 3, 'Intermediate'),
(34, 19, 6, 'Intermediate'),
(35, 19, 5, 'Expert'),
(36, 19, 4, 'Intermediate'),
(37, 19, 5, 'Intermediate'),
(38, 19, 5, 'Expert'),
(39, 19, 5, 'Expert'),
(40, 19, 6, 'Intermediate'),
(41, 19, 2, 'Expert'),
(42, 19, 4, 'Intermediate'),
(43, 25, 2, 'Intermediate'),
(44, 25, 2, 'undefined'),
(45, 25, 2, 'Beginer'),
(46, 25, 4, 'Intermediate'),
(47, 25, 4, 'Expert'),
(48, 25, 2, 'Expert'),
(49, 25, 3, 'Expert'),
(50, 25, 1, 'Expert'),
(51, 25, 3, 'Beginer'),
(52, 25, 4, 'Expert'),
(53, 25, 4, 'Expert'),
(54, 25, 4, 'Expert'),
(55, 25, 4, 'Expert'),
(56, 25, 4, 'Expert'),
(57, 25, 4, 'Expert'),
(58, 25, 2, 'Expert'),
(59, 25, 2, 'Expert'),
(60, 25, 2, 'Expert'),
(61, 25, 2, 'Expert'),
(62, 25, 2, 'Expert'),
(63, 25, 2, 'Expert'),
(64, 25, 2, 'Expert'),
(65, 25, 2, 'Expert'),
(66, 25, 2, 'Expert'),
(67, 25, 2, 'Expert'),
(68, 25, 2, 'Expert'),
(69, 42, 1, 'Expert'),
(70, 42, 2, 'Beginer'),
(71, 42, 5, 'Expert'),
(72, 27, 2, 'Intermediate'),
(73, 27, 2, 'Intermediate'),
(74, 27, 2, 'Intermediate'),
(75, 27, 2, 'Intermediate'),
(76, 27, 2, 'Expert'),
(77, 27, 3, 'Intermediate'),
(78, 27, 3, 'Expert'),
(79, 27, 2, 'Beginer'),
(80, 27, 3, 'Intermediate'),
(81, 27, 4, 'Beginer'),
(82, 25, 5, 'undefined'),
(83, 25, 1, 'undefined'),
(84, 25, 5, 'undefined'),
(85, 25, 5, 'undefined'),
(86, 25, 5, 'undefined'),
(87, 25, 5, 'undefined'),
(88, 25, 5, 'undefined'),
(89, 25, 5, 'undefined'),
(90, 25, 2, 'undefined'),
(91, 27, 4, 'Expert'),
(92, 27, 1, 'Intermediate'),
(93, 27, 2, 'Intermediate'),
(94, 27, 3, 'Beginer'),
(95, 27, 4, 'Beginer'),
(96, 27, 1, 'Intermediate'),
(97, 27, 2, 'undefined');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companyDetails`
--
ALTER TABLE `companyDetails`
  ADD PRIMARY KEY (`companyId`);

--
-- Indexes for table `interestedLocations`
--
ALTER TABLE `interestedLocations`
  ADD PRIMARY KEY (`sno`);

--
-- Indexes for table `jobDetails`
--
ALTER TABLE `jobDetails`
  ADD PRIMARY KEY (`jobId`);

--
-- Indexes for table `skillTable`
--
ALTER TABLE `skillTable`
  ADD PRIMARY KEY (`skillId`);

--
-- Indexes for table `userDetails`
--
ALTER TABLE `userDetails`
  ADD PRIMARY KEY (`sno`);

--
-- Indexes for table `userJobApplication`
--
ALTER TABLE `userJobApplication`
  ADD PRIMARY KEY (`applicationId`);

--
-- Indexes for table `userRegistration`
--
ALTER TABLE `userRegistration`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `userSkillLevel`
--
ALTER TABLE `userSkillLevel`
  ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companyDetails`
--
ALTER TABLE `companyDetails`
  MODIFY `companyId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `interestedLocations`
--
ALTER TABLE `interestedLocations`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jobDetails`
--
ALTER TABLE `jobDetails`
  MODIFY `jobId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `skillTable`
--
ALTER TABLE `skillTable`
  MODIFY `skillId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `userDetails`
--
ALTER TABLE `userDetails`
  MODIFY `sno` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `userJobApplication`
--
ALTER TABLE `userJobApplication`
  MODIFY `applicationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `userRegistration`
--
ALTER TABLE `userRegistration`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `userSkillLevel`
--
ALTER TABLE `userSkillLevel`
  MODIFY `sno` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
