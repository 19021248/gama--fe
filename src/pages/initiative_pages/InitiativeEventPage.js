import React from 'react';
import Header from '../../component/header/Header';
import './style.scss';
const events = [
  {
    name: 'Event 1',
    date: '2021-01-01',
    description: 'This is a description',
    link: 'https://www.google.com',
  },
  {
    name: 'Event 2',
    date: '2021-01-01',
    description: 'This is a description',
    link: 'https://www.google.com',
  },
];
export default function InitiativeEventPage() {
  return (
    <div className="event main-initiative-container">
      <Header />
      <div className="main-frame">
        <div class="banner">
          <div class="banner-title">Event</div>
          <div class="banner-subtitle">Các xự kiện tương lai</div>
        </div>
        <div class="content">
          {events.map((event) => (
            <div class="event-item">
              <span className="item-title">{event.name}</span>
              <span className="item-date">{event.date}</span>
              <span className="item-description">{event.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
