# Content Management Guide

All website content is now managed through JSON files located in `/src/data/`. This makes it easy to update text, images, links, and other content without touching any code.

## 📁 Content Files

### 1. `training-content.json`
Contains all content for the training center subdomain (training.laptian.com)

### 2. `services-content.json`
Contains all content for the repair services subdomain (services.laptian.com)

### 3. `common-content.json`
Contains shared content used across both subdomains (contact info, navigation, footer, etc.)

## 📝 Editing Content

### Update Training Center Content

**File:** `/src/data/training-content.json`

**Sections:**
- **hero**: Main hero section (title, subtitle, CTAs, stats)
- **gallery**: Gallery images and titles
- **testimonials**: Student reviews and ratings
- **placements**: Placement stats, partner companies, success stories
- **courses**: Training course details, pricing, highlights
- **otherServices**: Additional benefits and final CTA section

**Example - Changing Hero Title:**
```json
{
  "hero": {
    "title": "Master the Art of",  ← Edit this
    "titleHighlight": "Laptop Repair",  ← Or this (appears in gold)
    "subtitle": "Your subtitle here..."  ← Edit subtitle
  }
}
```

**Example - Adding a New Course:**
```json
{
  "courses": {
    "items": [
      {
        "id": 4,  ← New ID
        "title": "New Course Name",
        "duration": "6 Weeks",
        "level": "Intermediate",
        "price": "₹20,000",
        "description": "Course description here...",
        "highlights": [
          "Feature 1",
          "Feature 2",
          "Feature 3"
        ]
      }
    ]
  }
}
```

### Update Services Center Content

**File:** `/src/data/services-content.json`

**Sections:**
- **hero**: Main hero with service features
- **servicesList**: All repair services with pricing
- **processFlow**: Step-by-step repair process
- **testimonials**: Customer reviews

**Example - Adding a New Service:**
```json
{
  "servicesList": {
    "services": [
      {
        "icon": "🔊",  ← Emoji icon
        "title": "Speaker Repair",
        "description": "Fix audio issues and speaker problems...",
        "price": "From ₹1,200"
      }
    ]
  }
}
```

### Update Common/Shared Content

**File:** `/src/data/common-content.json`

**Sections:**
- **contact**: Phone, email, address, hours
- **social**: Social media URLs
- **infoBar**: Top bar promotional messages
- **navigation**: Navigation menu items for each subdomain
- **footer**: Footer content for each subdomain
- **promotionalOffers**: Countdown timer offers
- **seo**: SEO-related text

**Example - Changing Contact Information:**
```json
{
  "contact": {
    "phone": "+91 12345 67890",  ← Edit phone
    "email": "newemail@laptian.com",  ← Edit email
    "address": {
      "street": "456 New Street",  ← Edit address
      "city": "Mumbai",
      "state": "India",
      "zip": "400001"
    }
  }
}
```

**Example - Updating Social Media Links:**
```json
{
  "social": {
    "facebook": "https://facebook.com/your-page",
    "instagram": "https://instagram.com/your-profile",
    "twitter": "https://twitter.com/your-handle",
    "linkedin": "https://linkedin.com/company/your-company"
  }
}
```

**Example - Changing Navigation Links:**
```json
{
  "navigation": {
    "training": [
      { "href": "/", "label": "Home" },
      { "href": "/courses", "label": "Our Courses" },  ← Edit label
      { "href": "/new-page", "label": "New Page" }  ← Add new link
    ]
  }
}
```

**Example - Updating Promotional Offer:**
```json
{
  "promotionalOffers": {
    "training": {
      "text": "🎉 New Offer: Get 30% OFF!",  ← Edit offer text
      "daysValid": 45  ← Change number of days offer is valid
    }
  }
}
```

## 🖼️ Managing Images

Images are referenced in the JSON files but stored in the `/public/` directory.

**Current images:**
- `/public/hero-bg.png` - Hero background
- `/public/training-facility.png` - Training facility photos
- `/public/laptop-repair.png` - Repair work photos

**To add new images:**
1. Place image in `/public/` directory
2. Reference it in JSON: `"/your-image.png"`

**Example - Changing Gallery Images:**
```json
{
  "gallery": {
    "images": [
      {
        "src": "/new-image.png",  ← Add your image filename
        "alt": "Image description for SEO",
        "title": "Title shown on hover"
      }
    ]
  }
}
```

## 🔄 After Editing JSON Files

1. **Save the JSON file**
2. **Restart the dev server** (if running):
   ```bash
   # Stop: Ctrl+C
   npm run dev
   ```
3. **Or rebuild** for production:
   ```bash
   npm run build
   ```

## ✅ JSON Validation Tips

- Use a JSON validator/linter to check syntax
- Maintain proper structure (brackets, commas, quotes)
- Don't leave trailing commas
- Keep consistent formatting

**Common mistakes:**
```json
// ❌ Wrong - trailing comma
{
  "title": "My Title",  ← Remove this comma
}

// ✅ Correct
{
  "title": "My Title"
}
```

## 📍 Quick Reference

| What to update | File | Section |
|---|---|---|
| Hero section text | `training-content.json` or `services-content.json` | `hero` |
| Course details | `training-content.json` | `courses.items` |
| Service pricing | `services-content.json` | `servicesList.services` |
| Contact info | `common-content.json` | `contact` |
| Social media | `common-content.json` | `social` |
| Navigation menus | `common-content.json` | `navigation` |
| Promotional offers | `common-content.json` | `promotionalOffers` |
| Testimonials | `training-content.json` or `services-content.json` | `testimonials.reviews` |

## 💡 Pro Tips

1. **Backup before editing**: Always keep a backup of the original JSON files
2. **Test locally first**: Make changes on your local machine before deploying
3. **Use emojis**: Emojis work great for icons (🎓, 🔧, ⚡, etc.)
4. **Keep it consistent**: Maintain similar structure when adding new items
5. **Validate JSON**: Use online JSON validators to check for errors

## 🆘 Troubleshooting

**Problem:** Website not updating after JSON changes
- **Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R)

**Problem:** Build fails after editing JSON
- **Solution:** Check JSON syntax, ensure all brackets and quotes are matched

**Problem:** Missing content on website
- **Solution:** Verify the JSON property names match exactly (case-sensitive)

## 📧 Need Help?

If you encounter issues editing the JSON files, contact your developer or refer to the main README.md for technical support.

---

**Remember:** The JSON files are the single source of truth for all website content. All text, images, links, and pricing can be managed here!
