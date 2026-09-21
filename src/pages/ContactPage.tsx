import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Chennai',
    projectType: 'Private Residence',
    approximateBudget: '₹5 Cr – ₹10 Cr',
    projectTimeline: '3–6 Months',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main style={{ backgroundColor: '#F5F1E8', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '72px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.28em',
              fontWeight: 600,
              color: '#B08A52',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            CONFIDENTIAL INQUIRY
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
              lineHeight: 1.08,
              color: '#26221D',
              letterSpacing: '0.02em',
              marginBottom: '24px'
            }}
          >
            START A CONVERSATION
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.3vw, 1.1875rem)',
              lineHeight: 1.7,
              color: '#686158'
            }}
          >
            Our directors personally review every architectural inquiry. Please provide preliminary details regarding your site, spatial program, and timeline.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start'
          }}
        >
          {/* Form Column */}
          <div style={{ gridColumn: 'span 7' }} className="contact-form-col">
            {isSubmitted ? (
              <div
                style={{
                  backgroundColor: '#FAF8F3',
                  border: '1px solid #B08A52',
                  borderRadius: '2px',
                  boxShadow: '0 20px 60px rgba(45, 35, 25, 0.08)',
                  padding: 'clamp(40px, 6vw, 64px)',
                  textAlign: 'center'
                }}
              >
                <CheckCircle2 size={48} color="#B08A52" style={{ margin: '0 auto 20px auto' }} />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#26221D', marginBottom: '16px' }}>
                  Inquiry Received
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#686158', lineHeight: 1.7, marginBottom: '28px' }}>
                  Thank you, {formData.name}. Our principal directorship will review your brief for {formData.city} and contact you within one business day.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: '#FAF8F3',
                  border: '1px solid rgba(50, 42, 32, 0.12)',
                  borderRadius: '2px',
                  boxShadow: '0 20px 60px rgba(45, 35, 25, 0.06)',
                  padding: 'clamp(32px, 5vw, 56px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                  {/* Name */}
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.18em',
                        color: '#B08A52',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arvind Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(50, 42, 32, 0.15)',
                        borderRadius: '2px',
                        color: '#26221D',
                        padding: '14px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.18em',
                        color: '#B08A52',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arvind@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(50, 42, 32, 0.15)',
                        borderRadius: '2px',
                        color: '#26221D',
                        padding: '14px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                  {/* Phone */}
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.18em',
                        color: '#B08A52',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600
                      }}
                    >
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(50, 42, 32, 0.15)',
                        borderRadius: '2px',
                        color: '#26221D',
                        padding: '14px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.18em',
                        color: '#B08A52',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600
                      }}
                    >
                      Project Location *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(50, 42, 32, 0.15)',
                        borderRadius: '2px',
                        color: '#26221D',
                        padding: '14px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Chennai">Chennai, Tamil Nadu</option>
                      <option value="Bengaluru">Bengaluru, Karnataka</option>
                      <option value="Hyderabad">Hyderabad, Telangana</option>
                      <option value="Coimbatore">Coimbatore, Tamil Nadu</option>
                      <option value="Kochi">Kochi / Kerala Coast</option>
                      <option value="Other">Other South Indian Location</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                  {/* Project Type */}
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.18em',
                        color: '#B08A52',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600
                      }}
                    >
                      Typology *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(50, 42, 32, 0.15)',
                        borderRadius: '2px',
                        color: '#26221D',
                        padding: '14px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Private Residence">Private Residence</option>
                      <option value="Luxury Villa">Luxury Villa / Estate</option>
                      <option value="Courtyard House">Courtyard Residence</option>
                      <option value="Bespoke Interiors">Interior Architecture</option>
                      <option value="Commercial Development">Boutique Commercial</option>
                    </select>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.18em',
                        color: '#B08A52',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600
                      }}
                    >
                      Approximate Budget *
                    </label>
                    <select
                      value={formData.approximateBudget}
                      onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(50, 42, 32, 0.15)',
                        borderRadius: '2px',
                        color: '#26221D',
                        padding: '14px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        outline: 'none'
                      }}
                    >
                      <option value="₹3 Cr – ₹5 Cr">₹3 Cr – ₹5 Cr</option>
                      <option value="₹5 Cr – ₹10 Cr">₹5 Cr – ₹10 Cr</option>
                      <option value="₹10 Cr – ₹25 Cr">₹10 Cr – ₹25 Cr</option>
                      <option value="Above ₹25 Cr">Above ₹25 Cr</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.18em',
                      color: '#B08A52',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: 600
                    }}
                  >
                    Spatial Vision &amp; Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the site location, plot size, architectural preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(50, 42, 32, 0.15)',
                      borderRadius: '2px',
                      color: '#26221D',
                      padding: '14px 16px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    alignSelf: 'flex-start',
                    minHeight: '48px',
                    padding: '16px 36px',
                    cursor: 'pointer'
                  }}
                >
                  <span>SEND INQUIRY</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Studio Coordinates Column */}
          <div style={{ gridColumn: 'span 5' }} className="contact-coords-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.24em',
                    fontWeight: 600,
                    color: '#B08A52',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '16px'
                  }}
                >
                  DIRECT CHANNELS
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail size={16} color="#B08A52" />
                    <a
                      href="mailto:hello@vistaraconstructions.com"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#26221D', textDecoration: 'none' }}
                    >
                      hello@vistaraconstructions.com
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone size={16} color="#B08A52" />
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#26221D' }}>
                      +91 44 2499 8200
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(50, 42, 32, 0.12)', paddingTop: '32px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.24em',
                    fontWeight: 600,
                    color: '#B08A52',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '20px'
                  }}
                >
                  REGIONAL STUDIOS
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <MapPin size={14} color="#B08A52" />
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: '#26221D' }}>
                        Chennai Studio
                      </h3>
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#686158', paddingLeft: '22px' }}>
                      Vistara Tower, Boat Club Road, R.A. Puram, Chennai — 600028
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <MapPin size={14} color="#B08A52" />
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: '#26221D' }}>
                        Bengaluru Studio
                      </h3>
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#686158', paddingLeft: '22px' }}>
                      The Pavilions, 48 Lavelle Road, Shanthala Nagar, Bengaluru — 560001
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <MapPin size={14} color="#B08A52" />
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: '#26221D' }}>
                        Hyderabad Studio
                      </h3>
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#686158', paddingLeft: '22px' }}>
                      Road No. 36, Jubilee Hills, Hyderabad — 500033
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-form-col, .contact-coords-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </main>
  );
};
