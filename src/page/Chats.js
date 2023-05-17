// Підключаємо потрібні технології
import React from "react";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
import Empty from "../component/Empty";

import ChatList from "../component/ChatList";
// ============================================
// Імпортуємо файли потрібних картинок

import CatPhoto from "../file/photo/cat.png";
import DimaPhoto from "../file/photo/dima.png";
import AnnaPhoto from "../file/photo/ann.png";
import FamilyPhoto from "../file/photo/family-dog.png";
import GrandFatherPhoto from "../file/photo/dad-ivan.png";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: CatPhoto,
    name: "Про котів",
    message: "Я люблю пити молоко",
    isUnread: true,
    time: "10:07"
  },
  {
    id: 2,
    photo: DimaPhoto,
    name: "Діма",
    message: "Привіт! Як справи?",
    isRead: true,
    time: "12:15"
  },
  {
    id: 3,
    photo: AnnaPhoto,
    name: "Анна",
    message: "Привіт! Запрошую на навчання.",
    isUnread: true,
    messageAmount: 10,
    time: "11:45"
  },
  {
    id: 4,
    photo: FamilyPhoto,
    name: "Сімейний чат",
    message: "Сьогодні на вечерю смачні овочі.",
    isUnread: true,
    messageAmount: 2,
    notifyOff: true,
    time: "12:27",
    user: "Тітка",
    hashtag: "#family"
  },
  {
    id: 5,
    photo: GrandFatherPhoto,
    name: "Дід Іван",
    message: "Привіт! Дякую за новий светр!",
    isUnread: true,
    time: "09:11"
  }
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Чати" />
      <div>
        <ChatList list={CHATS_LIST} />
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/chats" />
    </Page>
  );
}
