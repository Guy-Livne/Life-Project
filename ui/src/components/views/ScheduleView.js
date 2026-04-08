import React from 'react';
import { Calendar } from 'lucide-react';

function ScheduleView() {
  return (
    <div className="view-container">
      <div className="view-header">
        <Calendar className="view-icon" size={32} />
        <h2 className="view-title">Schedule</h2>
      </div>
      <div className="view-placeholder-card" style={{ 
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '20px'
      }}>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FJerusalem&showPrint=0&src=Z3V5bGl2bmUxMjNAZ21haWwuY29t&src=YjViODM2Njg2MmE3NTUxZGY3YWQyYWZmODU0MWUxNDA4ZGQ0MTAxODk4Y2E4YjgxNzdlMWEyMDliMDMxYzI0YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NmFjOTYzYWY0Mzk1N2IyNGI2ZGFiYjA1ZWU1ZGQ1ODEwOTUxMzE2ZmQ1YTQyZmFlYTFkMWJlN2RjNTc3MGViNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NjdlNjZkYmMyYThiY2EyZTcxYmFiOTJjYTM5ODUxYWVmMDMyMGE0ODM4MzJiOTYyZDJhMTNhYjI2ZTZjZjhiZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDkxMDFkYzZmNDdjMDk3MjM1ZTE0NWQ5MTFlZTNjZTA0YzhjMzY3YjlhOGQ1OGNlOWM5MmY3ZTc0Mzc0ZGE2NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MzAxNzIzOTY5NDkyYjgwNjk2ZjhjM2NmMDA4ODI0ZDdmOGQ0MTA5MDNlNTNmY2FiZGJlNDFlMDdjZTNlYTUyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZTUxZjI1ZjJhZmY2ZTgwOGUxYTY1YWQ0MmRhMWNiZTUzOTYzMjY5YzQyODU0OTYyODU4Y2NhZGU5OTcwMWE5M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YjYxN2ZiODRiNDc1NmIwMzMxZDk0NDNjYzlkZmIwOTY0OTUxNjNjZTYwNDA1NGI5MTA5ZGFjYTU2YWFlNjQwNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NzA5ZWMwNDkyMzI0ZDBlNzIxYjkxM2RkNTVhMDc3OTE0OWFmNThmYjViN2E3YWQwMzk2MjM2NDI1ZmM0MDJmYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA1MTk2MjM1NTQ0MTkxOTA0ODMzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=aXcuamV3aXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA1ODMwNzc4NTYzNzI3MDM5MDMyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAzMDg0ODEwNzYxMjg0NDgyNDYyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA3MjE3MzAzMDEyMzM4MzA0MzcwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEzMzk2NzQ0OTk2OTkxNTYxMTU1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039be5&color=%23e67c73&color=%23009688&color=%237986cb&color=%237cb342&color=%23f6bf26&color=%230b8043&color=%234285f4&color=%23616161&color=%23007b83&color=%230b8043&color=%231967d2&color=%231967d2&color=%231967d2&color=%23202124" 
          style={{ border: 'solid 1px #777' }} 
          width="100%" 
          height="600" 
          frameBorder="0" 
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
}

export default ScheduleView;
