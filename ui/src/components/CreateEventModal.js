import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, AlignLeft, Check } from 'lucide-react';
import './CreateEventModal.css';

const CreateEventModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    summary: '',
    description: '',
    startTime: '',
    endTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isFormValid = formData.summary && formData.startTime && formData.endTime;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getTimezoneData = () => {
    let timeZone = 'Asia/Jerusalem';
    try {
      timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Jerusalem';
    } catch (e) {
      console.warn('Could not detect timezone, falling back to Asia/Jerusalem');
    }

    const date = new Date();
    const offsetMinutes = -date.getTimezoneOffset();
    const absOffset = Math.abs(offsetMinutes);
    const hours = Math.floor(absOffset / 60);
    const minutes = absOffset % 60;
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const formattedOffset = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    return { timeZone, formattedOffset };
  };

  const formatToISO8601WithOffset = (dateTimeStr) => {
    if (!dateTimeStr) return '';
    const { formattedOffset } = getTimezoneData();
    // Input from datetime-local is YYYY-MM-DDTHH:mm
    // We need to add the offset: YYYY-MM-DDTHH:mm:ss±HH:mm
    return `${dateTimeStr}:00${formattedOffset}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    const { timeZone } = getTimezoneData();

    const payload = {
      summary: formData.summary,
      ...(formData.description && { description: formData.description }),
      start: {
        dateTime: formatToISO8601WithOffset(formData.startTime),
        timeZone: timeZone,
      },
      end: {
        dateTime: formatToISO8601WithOffset(formData.endTime),
        timeZone: timeZone,
      },
    };

    console.log('Submitting Event Payload:', payload);

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // const response = await fetch('/api/events', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ summary: '', description: '', startTime: '', endTime: '' });
      }, 2000);
    } catch (error) {
      console.error('Failed to create event:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-left">
            <Calendar size={20} className="header-icon" />
            <h3>Create a new Event</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label htmlFor="summary">
              <Check size={16} /> Summary *
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Event title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              <AlignLeft size={16} /> Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add details (optional)"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="startTime">
              <Clock size={16} /> Start Time *
            </label>
            <input
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">
              <Clock size={16} /> End Time *
            </label>
            <input
              type="datetime-local"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`submit-btn ${isFormValid ? 'active' : ''} ${isSubmitting ? 'loading' : ''} ${isSuccess ? 'success' : ''}`}
            disabled={!isFormValid || isSubmitting}
          >
            {isSuccess ? 'Created!' : isSubmitting ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventModal;
