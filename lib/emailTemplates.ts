interface EmailTemplateProps {
  name?: string;
  email: string;
}

export function getWelcomeEmailHTML({ name, email }: EmailTemplateProps): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to BridgeAfrica Newsletter</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #0A2342;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fefefe;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border: 1px solid #e2e8f0;
        }
        .header {
            background: linear-gradient(135deg, #0A2342 0%, #1e3a5f 100%);
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            margin-bottom: 10px;
        }
        .logo img {
            height: 40px;
            width: auto;
        }
        .header-text {
            color: #ffffff;
            font-size: 18px;
            margin: 0;
        }
        .content {
            padding: 40px 30px;
        }
        .welcome-title {
            font-size: 28px;
            font-weight: bold;
            color: #0A2342;
            margin-bottom: 20px;
            text-align: center;
        }
        .welcome-message {
            font-size: 16px;
            line-height: 1.7;
            color: #0A2342;
            margin-bottom: 30px;
        }
        .highlight {
            color: #D0312D;
            font-weight: 600;
        }
        .cta-section {
            background-color: #f8fafc;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            margin: 30px 0;
            border: 1px solid #e2e8f0;
        }
        .cta-title {
            font-size: 20px;
            font-weight: bold;
            color: #0A2342;
            margin-bottom: 15px;
        }
        .cta-text {
            font-size: 16px;
            color: #0A2342;
            margin-bottom: 25px;
        }
        .cta-button {
            display: inline-block;
            background-color: #D0312D;
            color: #ffffff !important;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #B02A26;
            color: #ffffff !important;
        }
        .cta-button:visited {
            color: #ffffff !important;
        }
        .cta-button:active {
            color: #ffffff !important;
        }
        .footer {
            background-color: #0A2342;
            padding: 30px;
            text-align: center;
        }
        .footer-text {
            color: #ffffff;
            font-size: 14px;
            margin-bottom: 15px;
        }
        .footer-links {
            margin-bottom: 20px;
        }
        .footer-link {
            color: #F6BE00;
            text-decoration: none;
            margin: 0 15px;
            font-size: 14px;
        }
        .unsubscribe {
            color: #888;
            font-size: 12px;
        }
        .unsubscribe a {
            color: #888;
        }
        @media (max-width: 600px) {
            .container {
                margin: 0 10px;
                border-radius: 8px;
            }
            .header, .content, .footer {
                padding: 30px 20px;
            }
            .cta-section {
                padding: 20px;
            }
            .welcome-title {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1762426580/yellowlogo_f7g4hn.png" alt="BridgeAfrica" />
            </div>
            <p class="header-text">Connecting Visionary Companies with Africa's Top 1% Talent</p>
        </div>
        
        <div class="content">
            <h1 class="welcome-title">Welcome to Our Community!</h1>
            
            <div class="welcome-message">
                <p>Hi${name ? ` ${name}` : ''},</p>
                
                <p>Thank you for subscribing to the BridgeAfrica newsletter! You've just taken the first step toward accessing <span class="highlight">Africa's top 1% talent</span> and staying ahead of the curve in remote team building.</p>
                
                <p>Here's what you can expect from us:</p>
                <ul>
                    <li><strong>Exclusive insights</strong> on building high-performing remote teams</li>
                    <li><strong>Success stories</strong> from companies that diversified their talent with Africa</li>
                    <li><strong>Industry trends</strong> and best practices for global talent acquisition</li>
                    <li><strong>Early access</strong> to new services and opportunities</li>
                </ul>
            </div>
            
            <div class="cta-section">
                <h2 class="cta-title">Ready to Build Your Dream Team?</h2>
                <p class="cta-text">Don't wait for the perfect moment. Start building your resilient, world-class team today with Africa's finest talent.</p>
                <a href="https://bridgeafrica.com" class="cta-button">Explore Our Services</a>
            </div>
            
            <div class="welcome-message">
                <p>We're builders too, and we understand the challenges of scaling teams. That's why we've codified how to deliver A+ players from Africa, and we stake our reputation on your outcomes.</p>
                
                <p>If you have any questions or want to learn more about how we can help transform your business, simply reply to this email.</p>
                
                <p>Welcome aboard!</p>
                
                <p><strong>The BridgeAfrica Team</strong><br>
                <span style="color: #D0312D;">Building bridges, Creating opportunities</span></p>
            </div>
        </div>
        
        <div class="footer">
            <p class="footer-text">Follow us for more insights and updates</p>
            
            <div class="footer-links">
                <a href="https://bridgeafrica.com" class="footer-link">Website</a>
                <a href="https://bridgeafrica.com/about" class="footer-link">About Us</a>
                <a href="mailto:hello@bridgeafrica.com" class="footer-link">Contact</a>
            </div>
            
            <p class="unsubscribe">
                You're receiving this because you subscribed to our newsletter.<br>
                <a href="{{unsubscribe_url}}">Unsubscribe</a> | <a href="{{preferences_url}}">Update Preferences</a>
            </p>
        </div>
    </div>
</body>
</html>
  `;
}

export function getWelcomeEmailText({ name, email }: EmailTemplateProps): string {
  return `
Welcome to BridgeAfrica Newsletter!

Hi${name ? ` ${name}` : ''},

Thank you for subscribing to the BridgeAfrica newsletter! You've just taken the first step toward accessing Africa's top 1% talent and staying ahead of the curve in remote team building.

Here's what you can expect from us:
• Exclusive insights on building high-performing remote teams
• Success stories from companies that diversified their talent with Africa
• Industry trends and best practices for global talent acquisition
• Early access to new services and opportunities

Ready to Build Your Dream Team?
Don't wait for the perfect moment. Start building your resilient, world-class team today with Africa's finest talent.

Visit us at: https://bridgeafrica.com

We're builders too, and we understand the challenges of scaling teams. That's why we've codified how to deliver A+ players from Africa, and we stake our reputation on your outcomes.

If you have any questions or want to learn more about how we can help transform your business, simply reply to this email.

Welcome aboard!

The BridgeAfrica Team
Building bridges, Creating opportunities

---
You're receiving this because you subscribed to our newsletter.
Unsubscribe: {{unsubscribe_url}}
  `.trim();
}