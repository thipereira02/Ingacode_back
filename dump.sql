--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: collaborators; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.collaborators (
    id text NOT NULL,
    name character varying(250) NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    "deletedAt" timestamp without time zone,
    "userId" text NOT NULL,
    "wasDeleted" boolean DEFAULT false NOT NULL
);


--
-- Name: projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.projects (
    id text NOT NULL,
    "userId" text NOT NULL,
    name character varying(250) NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    "deletedAt" timestamp without time zone,
    "wasDeleted" boolean DEFAULT false NOT NULL
);


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id text NOT NULL,
    token text NOT NULL,
    "userId" text NOT NULL
);


--
-- Name: tasks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tasks (
    id text NOT NULL,
    name character varying(250) NOT NULL,
    description character varying(65535) NOT NULL,
    "projectId" text NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    "deletedAt" timestamp without time zone,
    "wasDeleted" boolean DEFAULT false NOT NULL
);


--
-- Name: timeTrackers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."timeTrackers" (
    id text NOT NULL,
    "startDate" timestamp without time zone NOT NULL,
    "endDate" timestamp without time zone NOT NULL,
    "timeZoneId" character varying(200) NOT NULL,
    "taskId" text NOT NULL,
    "collaboratorId" text,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    "deletedAt" timestamp without time zone,
    "wasDeleted" boolean DEFAULT false NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id text NOT NULL,
    "userName" character varying(250) NOT NULL,
    password character varying(512) NOT NULL,
    "createdAt" timestamp without time zone,
    "updatedAt" timestamp without time zone,
    "deletedAt" timestamp without time zone,
    "wasDeleted" boolean DEFAULT false NOT NULL
);


--
-- Data for Name: collaborators; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.collaborators VALUES ('acd30aa4-b248-4f2b-862f-564044ae891f', 'Sem rumo', '2023-01-02 18:18:17.471', NULL, NULL, 'e2202096-4575-45c7-9f32-bcd32bb7e36f', false);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.projects VALUES ('133fe8e3-1684-48e2-b614-82ca114d9fbe', 'e2202096-4575-45c7-9f32-bcd32bb7e36f', 'Ingacode 2', '2023-01-02 12:12:45.357', NULL, NULL, false);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES ('1b6e833f-0395-45db-b922-406eacce89e3', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMjAyMDk2LTQ1NzUtNDVjNy05ZjMyLWJjZDMyYmI3ZTM2ZiIsImlhdCI6MTY3MjY2MTU1MSwiZXhwIjoxNjcyNzQ3OTUxfQ.7-UoK6QitR98K2HxQRt0_iwF9YiZK6o1vbjDqu0u44Q', 'e2202096-4575-45c7-9f32-bcd32bb7e36f');
INSERT INTO public.sessions VALUES ('07f2a596-2ee1-491e-a472-12f1805a0651', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMjAyMDk2LTQ1NzUtNDVjNy05ZjMyLWJjZDMyYmI3ZTM2ZiIsImlhdCI6MTY3MjY2MjE5NCwiZXhwIjoxNjcyNzQ4NTk0fQ.VFftGL1f1IdceA51QwBzZ29sSaN2yARUQ1nl0R8582Q', 'e2202096-4575-45c7-9f32-bcd32bb7e36f');
INSERT INTO public.sessions VALUES ('68fc3232-879d-4993-8d32-07609503af2b', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMjAyMDk2LTQ1NzUtNDVjNy05ZjMyLWJjZDMyYmI3ZTM2ZiIsImlhdCI6MTY3MjY2NDMyMCwiZXhwIjoxNjcyNzUwNzIwfQ.fn5oJycvJ_1gE3pGr3YONVi0-Z6tsVcp4FfA9RdNYAc', 'e2202096-4575-45c7-9f32-bcd32bb7e36f');
INSERT INTO public.sessions VALUES ('547626db-d6ad-4766-b38a-463fac59e7fc', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMjAyMDk2LTQ1NzUtNDVjNy05ZjMyLWJjZDMyYmI3ZTM2ZiIsImlhdCI6MTY3MjY4MTU5MywiZXhwIjoxNjcyNzY3OTkzfQ.Ev6-5IOV8PwKfRNsJhiMedalRwhzXSdZyepzG4o0eNU', 'e2202096-4575-45c7-9f32-bcd32bb7e36f');
INSERT INTO public.sessions VALUES ('9f2b3eb7-7e05-4947-8ac9-6f68f8bd189b', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMjAyMDk2LTQ1NzUtNDVjNy05ZjMyLWJjZDMyYmI3ZTM2ZiIsImlhdCI6MTY3MjY4ODkzMSwiZXhwIjoxNjcyNzc1MzMxfQ.z-na4GMFiL3uRaVxUfjLTZVNVHjla3XarWO2U4SZGQA', 'e2202096-4575-45c7-9f32-bcd32bb7e36f');


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tasks VALUES ('417e72a2-c164-4ef9-b7be-6e7856e28b99', 'lkhlkhlkhl', 'dfsdf', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 13:19:31.697', NULL, '2023-01-02 13:19:33.516', true);
INSERT INTO public.tasks VALUES ('5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', 'Ingacode Frontendsdsd', 'Desafio técnico 3 sdsgsdgdfhdfh sdsdf', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 12:13:33.113', '2023-01-02 13:39:28.635', '2023-01-02 13:47:40.208', true);
INSERT INTO public.tasks VALUES ('4e64b161-e9ce-482e-a2c7-5b440e32a7a6', 'fgjfgj', 'fgjfgjrtyurtuiko', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 13:47:04.636', '2023-01-02 13:47:17.311', '2023-01-02 14:01:46.235', true);
INSERT INTO public.tasks VALUES ('46cdf752-b264-4b8e-8229-dd92719dae0a', 'rdgdfgdfhdfhgfdg', 'dfgdfgdfgdfg', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 14:17:20.514', '2023-01-02 14:19:21.347', NULL, false);
INSERT INTO public.tasks VALUES ('734c0c55-d522-4986-820b-edc9fe8e9121', 'dfhdfhdfhsdfsdf', 'dfhdfhwertwetwet', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 14:01:53.41', '2023-01-02 14:06:20.125', '2023-01-02 17:54:34.147', true);
INSERT INTO public.tasks VALUES ('c7c3755a-f301-49b6-ba01-b14b7c8a6b59', 'sadasd', 'asdasdasd', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 17:59:22.845', NULL, NULL, false);
INSERT INTO public.tasks VALUES ('fd95e3a6-8ab7-4453-964c-cf3743b4c347', 'asdasd', 'asdasdasd', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 19:19:58.94', NULL, NULL, false);
INSERT INTO public.tasks VALUES ('58196209-c88b-4747-8819-bf3d1b86418f', 'cfhbdsdfsdf', '325325hjghj', '133fe8e3-1684-48e2-b614-82ca114d9fbe', '2023-01-02 14:19:14.717', '2023-01-02 14:30:25.596', '2023-01-02 19:39:40.967', true);


--
-- Data for Name: timeTrackers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."timeTrackers" VALUES ('38ba9436-ded8-4f2e-b29c-7517fabc586d', '2022-12-30 17:51:00', '2022-12-31 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:14:19.86', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('b6589944-a87b-48d5-a96e-98408defb097', '2022-12-30 17:51:00', '2022-12-31 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:31:21.002', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('c67bd072-64a9-463a-be1f-cf1c7b853579', '2022-12-30 17:51:00', '2022-12-31 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:35:41.542', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('63bdfce2-0f18-4e35-b59c-8c8496c7573a', '2023-01-03 13:33:00', '2023-01-31 03:33:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:39:16.734', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('3cd3a72f-dcc8-47e4-9b79-80b489ce2ad2', '2023-01-01 13:48:00', '2023-01-31 13:48:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:48:58.287', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('95b01284-4d1c-4fc8-a888-9dcf0dcf09d8', '2023-01-01 14:49:00', '2023-01-25 13:49:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:49:48.622', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('c9d395bd-9cbc-4f0a-add2-bacef62cbc8e', '2023-01-01 12:51:00', '2023-01-24 13:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:50:32.177', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('5bf4a7ba-7a88-4f4b-a477-017ff681348a', '2023-01-01 12:51:00', '2023-01-31 12:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:50:59.747', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('7356e2cc-125b-44a8-bb41-18720956e96f', '2023-01-01 13:51:00', '2023-01-31 13:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:51:52.616', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('483ddf4f-28cc-4c34-ab56-a49d97004ac6', '2023-01-03 13:58:00', '2023-01-30 12:59:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:59:03.253', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('dd4530df-3103-4dfd-878e-c9fc27eaf5bc', '2023-01-03 12:00:00', '2023-01-30 13:59:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 12:59:38.672', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('21d6ead3-9448-4c87-9ff9-2e1655ba49a4', '2023-01-03 13:59:00', '2023-01-30 13:59:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 13:00:03.251', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('222e09ac-457d-4441-a356-5e1102f2881b', '2023-01-03 13:03:00', '2023-01-31 13:03:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 13:02:07.981', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('b0a012a4-5cb0-44ba-af35-4603baa46451', '2023-01-03 13:04:00', '2023-01-31 13:04:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 13:03:10.293', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('71e77ab7-f817-4eb6-ae9a-39d129aacc9a', '2023-01-02 13:10:00', '2023-01-23 13:04:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 13:08:18.873', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('597ff408-601b-4e11-87cc-25f59cca2336', '2023-01-03 14:11:00', '2023-01-16 13:11:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 13:14:58.358', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('2efb9a54-99ef-4c2a-83f9-7ce7f2c12895', '2023-01-03 03:02:00', '2023-01-25 14:03:00', 'America/Recife', '734c0c55-d522-4986-820b-edc9fe8e9121', NULL, '2023-01-02 14:02:37.775', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('ad6b3a2d-ce60-43d1-b9e2-c193a505664d', '2023-01-03 03:03:00', '2023-02-01 14:04:00', 'America/Recife', '734c0c55-d522-4986-820b-edc9fe8e9121', NULL, '2023-01-02 14:03:55.631', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('6049e3a0-0f52-4b37-8617-c9aab058ebbc', '2023-01-11 14:08:00', '2023-01-31 14:09:00', 'America/Recife', '734c0c55-d522-4986-820b-edc9fe8e9121', NULL, '2023-01-02 14:07:11.041', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('6998112a-75d8-40a2-965f-a6df6761c7b7', '2023-01-05 14:31:00', '2023-01-30 14:32:00', 'America/Recife', '58196209-c88b-4747-8819-bf3d1b86418f', NULL, '2023-01-02 14:30:46.071', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('5b41029a-a521-4993-a2b4-2708926fdaa5', '2022-12-30 17:51:00', '2022-12-31 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:17:28.496', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('c8dde109-d062-4ecb-bfb3-935e0d0dd89f', '2022-12-30 17:51:00', '2022-12-31 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:17:32.183', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('d791614d-ba38-4e48-b7ba-1b64bc22176a', '2023-12-30 17:51:00', '2023-12-29 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:20:39.153', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('31c670b1-5896-400d-9343-b4cd7c079d04', '2023-12-30 17:51:00', '2023-12-29 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:21:51.741', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('57bc4808-0b73-41d3-9411-69961fdd8cb4', '2023-03-10 19:51:00', '2023-03-10 17:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:22:37.321', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('2e477d38-a6b3-46cc-8b6b-15afafe64930', '2023-03-10 19:51:00', '2023-03-10 19:51:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:29:43.345', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('b6c853cc-1803-4fb4-8fe4-0c9ce9fe1b9c', '2023-03-05 12:00:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:33:05.661', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('51f9810a-fbff-49ea-92cc-6648d80a5e4b', '2023-03-05 12:00:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:33:57.744', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('6ec8c81d-9b79-41a0-a9eb-7ece870a3ec7', '2023-03-05 12:00:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:33:59.732', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('51692678-9dc9-4e9b-abd0-47a587e01b00', '2023-03-05 12:10:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:34:09.178', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('589902ac-39bd-4ce4-a603-d150a8b223f3', '2023-03-05 12:10:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:36:52.943', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('bc381a4b-8b01-4bb4-ab72-859e564f043c', '2023-03-05 12:10:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:36:54.457', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('ccd7aba5-c5f7-4644-953e-1e0c222083d5', '2023-03-05 12:10:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:39:04.305', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('ff208eb8-fb72-4be8-b6f8-a5d4cbc2892e', '2023-03-05 12:10:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:39:43.096', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('4e31cf4c-30a1-4842-8716-03e902153fc3', '2023-03-05 12:10:00', '2023-03-05 12:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 15:39:57.95', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('f298b537-35c7-4347-b39e-abe5c087b1a5', '2023-03-05 15:10:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:05:57.091', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('177b41f6-a183-4bb5-9b1e-85c9ad4cd802', '2023-03-05 15:20:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:06:15.152', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('e178f01b-d650-4264-8a34-71da838f7702', '2023-03-05 15:20:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:11:16.062', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('350f3643-73ec-42bf-b11f-73319119a334', '2023-03-05 15:20:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:42:21.233', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('3ac57847-1abe-4c2a-9909-2f7ca3574354', '2023-01-02 18:46:00', '2023-01-03 18:46:00', 'America/Recife', '46cdf752-b264-4b8e-8229-dd92719dae0a', NULL, '2023-01-02 17:46:53.562', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('fb2be68b-c202-4859-ae12-1396d80f2263', '2023-01-02 19:48:00', '2023-02-07 17:48:00', 'America/Recife', '734c0c55-d522-4986-820b-edc9fe8e9121', NULL, '2023-01-02 17:47:37.898', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('c2c805d1-c2e0-4baf-8b18-f1f0f28d2851', '2023-01-03 21:48:00', '2023-01-05 18:48:00', 'America/Recife', '734c0c55-d522-4986-820b-edc9fe8e9121', NULL, '2023-01-02 17:48:18.332', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('570b8bec-cf60-4146-a34a-0dd9c3c22894', '2023-03-05 15:20:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:50:13.713', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('b2b6b9b1-eb79-41b2-aa8e-5cf0b5bc8f1a', '2023-03-05 15:20:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:52:43.861', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('8a389117-0d54-4291-98bc-72db44401833', '2023-03-05 15:20:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:53:01.515', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('3baf1ef0-21f2-46f2-8af1-8578e95e8010', '2023-03-05 15:20:00', '2023-03-05 15:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:53:06.125', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('a5c42d32-eb50-4f35-951b-1807afe72ca8', '2023-03-05 18:20:00', '2023-03-05 18:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:53:18.179', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('efede7ab-bcf1-4f17-962e-6e8d32b42da1', '2023-03-05 18:20:00', '2023-03-05 18:50:00', 'America/Recife', '5f54eb5a-c9c7-4e02-8940-1d64fc4ee4a9', NULL, '2023-01-02 17:53:46.109', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('d67892a7-8f92-4f95-bcc4-0dba60734bf2', '2023-01-03 19:16:00', '2023-01-24 18:17:00', 'America/Recife', 'c7c3755a-f301-49b6-ba01-b14b7c8a6b59', NULL, '2023-01-02 18:16:33.112', NULL, NULL, false);
INSERT INTO public."timeTrackers" VALUES ('f731fb20-6414-46df-87d6-5208f03129b4', '2023-01-03 18:20:00', '2023-01-27 18:19:00', 'America/Recife', '58196209-c88b-4747-8819-bf3d1b86418f', 'acd30aa4-b248-4f2b-862f-564044ae891f', '2023-01-02 18:18:41.034', NULL, NULL, false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES ('e2202096-4575-45c7-9f32-bcd32bb7e36f', 'Teste', '$2b$12$hc62HBgfdcL5BuRqEHbG9uxQg5sBC9qhEDCgQbZvBfjOOo3CS3O1e', '2023-01-02 12:12:26.324', NULL, NULL, false);


--
-- Name: collaborators collaborators_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collaborators
    ADD CONSTRAINT collaborators_pk PRIMARY KEY (id);


--
-- Name: projects projects_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: tasks tasks_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pk PRIMARY KEY (id);


--
-- Name: timeTrackers timeTrackers_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."timeTrackers"
    ADD CONSTRAINT "timeTrackers_pk" PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: users users_userName_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_userName_key" UNIQUE ("userName");


--
-- Name: collaborators collaborators_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collaborators
    ADD CONSTRAINT collaborators_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: projects projects_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: tasks tasks_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_fk0 FOREIGN KEY ("projectId") REFERENCES public.projects(id);


--
-- Name: timeTrackers timeTrackers_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."timeTrackers"
    ADD CONSTRAINT "timeTrackers_fk0" FOREIGN KEY ("taskId") REFERENCES public.tasks(id);


--
-- Name: timeTrackers timeTrackers_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."timeTrackers"
    ADD CONSTRAINT "timeTrackers_fk1" FOREIGN KEY ("collaboratorId") REFERENCES public.collaborators(id);


--
-- PostgreSQL database dump complete
--

