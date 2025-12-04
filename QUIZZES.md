# NoteCode Project-Specific Quizzes

## Quiz 1: General Frontend Understanding (NoteCode Context)

### Questions Only

1. Why would using the `next/image` component for the NoteCode logo be better than a regular `<img>` tag?
   - A) No difference between them
   - B) Automatic optimization, lazy loading, responsive sizing, and layout shift prevention
   - C) It only works on desktop
   - D) It makes the logo smaller

2. What is the main purpose of separating the Header component from the Hero component in NoteCode?
   - A) Reusability, separation of concerns, easier testing and maintenance
   - B) To make the project slower
   - C) Required by Next.js
   - D) No particular purpose

3. Why must syntax highlighting in the NoteCode EditorCard be handled as a client component?
   - A) Code editors require browser APIs, DOM manipulation, and state management
   - B) Server components are faster
   - C) It's not necessary
   - D) All components should be server components

4. What does `max-w-3xl mx-auto` achieve in Tailwind for NoteCode's EditorCard?
   - A) Limits card width to ~768px for readability and centers it horizontally
   - B) Makes the card full width
   - C) Required for all cards
   - D) Only has aesthetic purpose

5. Why should the NoteCode ShareButton have a minimum touch target size of 44-48px?
   - A) WCAG accessibility guideline; accommodates average finger size and reduces mis-taps
   - B) Makes it more visible
   - C) Required by CSS
   - D) No accessibility reason

6. What is the difference between `bg-[#fffffe]` and `bg-white` for NoteCode's header background?
   - A) `bg-[#fffffe]` is off-white, slightly tinted; reduces contrast and screen fatigue
   - B) They are identical
   - C) `bg-[#fffffe]` makes text invisible
   - D) `bg-white` reduces file size

7. Why use `dynamic()` for importing the code editor in NoteCode on desktop only?
   - A) Lazy-loads heavy library (~1MB), reduces mobile bundle, improves FCP
   - B) Improves performance on mobile
   - C) Breaks code on mobile
   - D) No particular reason

8. How do semantic HTML tags like `<header>` improve NoteCode's SEO and accessibility?
   - A) Search engines understand structure; screen readers navigate landmarks
   - B) No improvement
   - C) Only for styling
   - D) Replaces `<div>` functionality

9. What does the `content` configuration in `tailwind.config.ts` do for NoteCode?
   - A) Tells Tailwind which files to scan for class names; prevents purging utilities
   - B) Controls page content
   - C) Font content only
   - D) No functional purpose

10. Why should NoteCode's BackgroundShapes use `pointer-events-none`?
    - A) Prevents decorative shapes from blocking clicks on interactive elements
    - B) Makes shapes invisible
    - C) Speeds up the page
    - D) No functional reason

11. In NoteCode's Header, what is the purpose of the `gap` utility in Flexbox?
    - A) Controls consistent spacing between logo and site name; replaces manual margins
    - B) Hides elements
    - C) Makes elements align differently
    - D) No particular purpose

12. Why should form inputs in NoteCode be 16px or larger?
    - A) Prevents Mobile Safari auto-zoom on input focus; improves mobile UX
    - B) Makes text easier to read only
    - C) Required by CSS
    - D) No specific reason

13. Which is more suitable for NoteCode's Hero section: Grid or Flexbox?
    - A) Flexbox; Hero is single-column layout needing flexible sizing
    - B) Grid only
    - C) No difference
    - D) Neither is suitable

14. What role does `aria-label` play on the NoteCode ShareButton?
    - A) Provides accessible text description for screen readers on icon-only buttons
    - B) Changes button appearance
    - C) Required for all buttons
    - D) No accessibility purpose

15. How does `overflow-auto` differ from `overflow-hidden` in NoteCode's EditorCard?
    - A) `overflow-auto` shows scrollbar when content exceeds container; `overflow-hidden` clips content
    - B) They do the same thing
    - C) `overflow-auto` hides content
    - D) `overflow-hidden` adds scrolling

16. Why use responsive typography like `text-3xl md:text-5xl` in NoteCode?
    - A) Adapts font size to screen width for optimal readability; fixed size unreadable on some devices
    - B) Makes text larger
    - C) Reduces file size
    - D) No particular reason

17. What do the three `@tailwind` directives in globals.css accomplish?
    - A) Import base styles, components, and utilities; NoteCode needs all three to function
    - B) Create custom utilities only
    - C) Required for dark mode only
    - D) Reduce CSS file size

18. Why should heavy libraries like Monaco editor be lazy-loaded in NoteCode?
    - A) Improves initial page load time, reduces bundle size, improves Core Web Vitals
    - B) Improves runtime performance only
    - C) Required by Next.js
    - D) No particular benefit

19. What do `rounded-2xl` and `shadow-2xl` accomplish on NoteCode's EditorCard?
    - A) Create modern design with visual depth; card appears elevated and polished
    - B) Reduce CSS requirements
    - C) Make card invisible
    - D) No functional benefit

20. How do you determine if a NoteCode component should be server vs client?
    - A) Server for static content; client for hooks, browser APIs, interactivity
    - B) All should be server components
    - C) All should be client components
    - D) No distinction needed

---

## Quiz 2: Mobile Design & Mobile-First (NoteCode Context)

### Questions Only

1. How should the NoteCode Hero section adapt on mobile compared to desktop?
   - A) Smaller typography (`text-2xl sm:text-3xl`), reduced padding (`py-8 sm:py-20`), fit above fold
   - B) Keep exact same size as desktop
   - C) Hide Hero on mobile
   - D) Make title larger on mobile

2. What strategy should be used for NoteCode's decorative background shapes on mobile?
   - A) Hide with `hidden sm:block` or reduce opacity to declutter and improve contrast
   - B) Show all shapes on mobile
   - C) Make shapes larger
   - D) No changes needed

3. How should the NoteCode EditorCard be sized on mobile?
   - A) Full width with `mx-4` padding, max-height with `max-h-[60vh] overflow-auto`
   - B) Same width as desktop
   - C) Smaller than desktop
   - D) Hidden on mobile

4. How would you increase the NoteCode ShareButton's mobile touch target while maintaining design?
   - A) `w-12 h-12 sm:w-10 sm:h-10` (48px mobile, scales down on tablet); adjust position with `right-4 bottom-4 sm:right-6`
   - B) Same size on all devices
   - C) Hide on mobile
   - D) Make smaller

5. In NoteCode's mobile layout, how would a two-column layout adapt?
   - A) Stack vertically with `flex flex-col sm:flex-row`; use `w-full sm:w-1/2` for sizing
   - B) Keep columns side-by-side
   - C) Hide one column
   - D) Shrink both columns

6. Why should NoteCode's code preview be read-only or non-interactive on mobile?
   - A) Heavy editor (~1MB) bloats bundle, saves battery/memory, simpler UX for mobile
   - B) Mobile can't use editors
   - C) Not necessary
   - D) For aesthetic reasons only

7. What is Tailwind's `sm:` breakpoint and when should NoteCode layout transition?
   - A) 640px minimum width; transitions mobile features (stacked) to tablet features (columns)
   - B) 500px breakpoint
   - C) Mobile-only breakpoint
   - D) No breakpoint purpose

8. How should you scale the NoteCode Header logo responsively across devices?
   - A) Mobile `w-10 h-10` (40px) → tablet `w-12 h-12` (48px) → desktop `w-16 h-16` (64px)
   - B) Same size everywhere
   - C) Larger on mobile
   - D) Hidden on some devices

9. Why use responsive typography like `text-2xl sm:text-3xl md:text-5xl` for NoteCode's headline?
   - A) Different viewing distances require different sizes; fixed size unreadable on some devices
   - B) Makes text larger
   - C) Reduces CSS file size
   - D) No particular reason

10. How would you implement scrolling for NoteCode's code area with `max-h-[60vh] overflow-auto`?
    - A) Limits height to 60% viewport, shows scrollbar when code exceeds it; balances headline visibility
    - B) Fixed height only
    - C) Full-height scrolling
    - D) No overflow handling

11. What is the purpose of the viewport meta tag for NoteCode on mobile?
    - A) `<meta name="viewport" content="width=device-width, initial-scale=1">` ensures proper scaling and prevents unwanted zoom
    - B) Changes page colors
    - C) Hides content
    - D) No functional purpose

12. Create a responsive padding strategy for NoteCode: `px-4 sm:px-6 lg:px-8`. Why these values?
    - A) Mobile conserves space (16px), tablet moderate (24px), desktop generous (32px); scales with screen size
    - B) Same padding everywhere
    - C) No padding on mobile
    - D) Larger on mobile only

13. Why can't NoteCode rely on hover-only interactions on mobile?
    - A) Mobile uses touch, not mouse; hover events don't exist; users won't see hover feedback
    - B) Hover states work on mobile
    - C) Hover makes page slower
    - D) No specific reason

14. How should vertical spacing (gap) between Hero and EditorCard differ on mobile vs desktop?
    - A) Mobile `gap-2 sm:gap-4 md:gap-8`; mobile saves space, desktop creates breathing room
    - B) Same gap everywhere
    - C) No gap on mobile
    - D) Overlapping elements

15. How should NoteCode's navigation be handled on mobile?
    - A) Hide behind hamburger menu or collapse; alternative is bottom navigation bar
    - B) Always visible like desktop
    - C) Always hidden
    - D) In a sidebar

16. What is the minimum font size for body text in NoteCode on mobile?
    - A) 16px; prevents Safari auto-zoom on input focus and ensures readability
    - B) 12px
    - C) 14px
    - D) No minimum

17. How should NoteCode's EditorCard be adapted for mobile?
    - A) Padding `p-4 sm:p-8`, radius `rounded-xl sm:rounded-2xl`, shadow `shadow-lg sm:shadow-2xl`
    - B) Same as desktop
    - C) No padding on mobile
    - D) Larger padding on mobile

18. What mobile-specific considerations apply to the NoteCode ShareButton?
    - A) 44-48px touch target, positioned `right-4 bottom-4` (safe zone), no content overlap
    - B) Same as desktop
    - C) Hide on mobile
    - D) Make smaller

19. Design responsive max-width strategy for NoteCode: `max-w-full mx-4 sm:mx-auto sm:max-w-3xl`. Why each class?
    - A) `max-w-full` prevents overflow, `mx-4` adds padding, `sm:mx-auto` centers, `sm:max-w-3xl` limits width
    - B) Fixed width everywhere
    - C) Full-width always
    - D) No max-width strategy

20. What testing approach should verify NoteCode's mobile design?
    - A) Real device testing (320px, 375px, 414px), slow network (3G), touch interactions, DevTools emulation
    - B) Browser emulator only
    - C) Device simulator sufficient
    - D) No testing needed

---

## Quiz 3: Desktop Design & Desktop-Specific (NoteCode Context)

### Questions Only

1. What should be the maximum width of NoteCode's main content container on desktop?
   - A) `max-w-6xl` (1152px) or `max-w-5xl` (896px) for optimal 50-75 character line length
   - B) Full screen width with no limit
   - C) 500px fixed width
   - D) No maximum width needed

2. How should typography scale differently on NoteCode's desktop Hero compared to mobile?
   - A) Headline `text-5xl md:text-6xl` (48-64px), subtitle `text-xl md:text-2xl`, generous gaps `space-y-8 lg:space-y-10`
   - B) Same size as mobile
   - C) Smaller on desktop
   - D) No scaling difference

3. How should NoteCode's decorative background shapes be displayed on desktop?
   - A) Full opacity/large size with full-bleed display for visual interest and brand personality
   - B) Hidden on desktop
   - C) Smaller than mobile
   - D) Transparent only

4. What is the typical height for NoteCode's EditorCard on desktop and how should code overflow be handled?
   - A) Fixed `h-[480px]` or `h-96` with internal `overflow-auto` for consistent layout
   - B) Auto height
   - C) Full screen height
   - D) No specific height

5. What hover effect should the NoteCode ShareButton have on desktop?
   - A) `hover:bg-blue-700`, `hover:shadow-lg`, `transition-all duration-200` for visual feedback
   - B) No hover effect
   - C) Size change on hover
   - D) Hide on hover

6. How should NoteCode's desktop Header be laid out using Flexbox?
   - A) `flex items-center gap-4` to position logo and site name horizontally
   - B) Vertically stacked
   - C) One element hidden
   - D) No specific layout

7. Why use generous padding like `p-8` inside NoteCode's EditorCard on desktop?
   - A) Creates breathing room around code, improves readability, focuses attention, feels premium
   - B) Reduces CSS requirements
   - C) Makes card invisible
   - D) No functional purpose

8. When should you use dynamic import for Monaco editor in NoteCode, and can you do this on mobile?
   - A) Desktop only with `dynamic(..., { ssr: false })`; avoids 1MB bundle on mobile
   - B) Same on all devices
   - C) Mobile preferred
   - D) Never use dynamic import

9. What is the ideal line length for NoteCode's headline text on desktop?
   - A) 50-75 characters per line for optimal reading speed and comprehension
   - B) Full screen width
   - C) 30 characters
   - D) No specific length

10. Should NoteCode's background gradient be full-bleed on desktop?
    - A) Yes; `absolute inset-0 -z-10` creates immersive, modern design and draws attention
    - B) Only in center
    - C) No gradient on desktop
    - D) Smaller gradient

11. What role does `shadow-2xl` play on NoteCode's EditorCard, and how does it differ from mobile?
    - A) Large drop shadow adds visual hierarchy; desktop uses `shadow-2xl`, mobile uses lighter `shadow-lg`
    - B) No difference from mobile
    - C) Only decorative
    - D) Reduces performance

12. How should NoteCode's page container padding be strategized on desktop?
    - A) `px-8 py-20` (32px horizontal, 80px vertical) for generous whitespace and balance
    - B) No padding
    - C) Minimal padding
    - D) Same as mobile

13. Why should NoteCode's EditorCard use `rounded-2xl` instead of smaller radius?
   - A) Modern design trend (16px radius); friendly, polished appearance; reflects contemporary UI
    - B) Reduced CSS
    - C) Makes card invisible
    - D) No particular reason

14. How should NoteCode's navigation be displayed on desktop vs mobile?
    - A) Desktop: horizontal navbar with visible links; mobile: hamburger menu to save space
    - B) Same on both
    - C) Always hidden
    - D) Only on mobile

15. What font size should NoteCode's code content use on desktop?
    - A) 14px or 16px (`text-base` or `text-lg`) for comfortable reading from normal distance
    - B) 12px or smaller
    - C) Same as mobile
    - D) No specific size

16. What is the purpose of generous line-height like `leading-relaxed` (1.625) for code in NoteCode?
    - A) Improves scanning between lines, prevents eye strain, especially for multi-line code
    - B) Compresses text
    - C) Only decorative
    - D) No particular purpose

17. Should NoteCode's ShareButton have a tooltip on hover on desktop?
    - A) Yes; show "Share this code" on hover; desktop-specific, improves UX for unsure users
    - B) No tooltip needed
    - C) Only on mobile
    - D) No hover interaction

18. How should absolute positioning be used for decorative elements in NoteCode's desktop Hero?
    - A) `absolute top-10 right-20`, `transform rotate-45 scale-150`, `-z-10` for visual interest
    - B) Inline with content
    - C) Hidden
    - D) No decorations

19. How should gaps between NoteCode's Hero title and subtitle differ on desktop vs mobile?
    - A) Desktop `space-y-8 lg:space-y-10` (32-40px); mobile `space-y-3 sm:space-y-4` (12-16px)
    - B) Same everywhere
    - C) No gap
    - D) Overlapping

20. Why are focus states critical for NoteCode's desktop experience?
    - A) Keyboard users navigate with Tab; visible focus required by WCAG 2.4.7; improves accessibility
    - B) Only needed on mobile
    - C) Not important
    - D) Slows down page

---

## Answer Key

### Quiz 1: General Frontend Understanding (NoteCode Context)

**1. next/image vs <img>**
- `next/image` provides automatic optimization (WebP, modern formats), lazy loading by default, responsive sizing with srcset, and automatic sizing to prevent layout shift
- A regular `<img>` tag requires manual optimization and doesn't lazy load by default

**2. Separating Header from Hero**
- Header is reusable (can appear in multiple layouts)
- Separation of concerns: Header handles branding, Hero handles the main showcase
- Easier to test, maintain, and modify independently
- Follows React best practices of component modularity

**3. EditorCard as Client Component**
- Code editors (Monaco, CodeMirror) require browser APIs like DOM manipulation, window object, event listeners
- They use JavaScript to manage state, syntax highlighting, line numbers
- Server components can't access browser APIs; would cause hydration mismatch
- Must use `"use client"` directive at top of EditorCard.tsx

**4. max-w-3xl mx-auto**
- `max-w-3xl` limits container to ~768px width, optimizing line length for readability (~50-75 characters)
- `mx-auto` centers the container horizontally
- Remaining space becomes symmetric margins on both sides
- Responsive: container stays centered and readable regardless of viewport width

**5. 44-48px Touch Target**
- WCAG 2.5.5 Level AAA guideline recommends 44x44px minimum
- Accommodates average finger size (~10mm)
- Reduces mis-taps and improves usability for motor impairments
- Critical for accessibility compliance

**6. bg-[#fffffe] vs bg-white**
- `bg-[#fffffe]` is off-white, slightly warmer or tinted (depending on design system)
- `bg-white` is pure #ffffff
- Off-white reduces harsh contrast and screen fatigue, creates softer appearance
- Choice depends on design language (NoteCode appears to prefer soft tones)

**7. dynamic() for Editor Import**
- Heavy editor libraries (Monaco ~1MB) bloat the initial bundle
- `dynamic(() => import(...), { ssr: false })` lazy-loads on desktop only
- Reduces mobile bundle size significantly, improves mobile First Contentful Paint (FCP)
- Solves: slow mobile load times, excessive memory usage on mobile devices

**8. Semantic HTML vs <div>**
- Search engines understand structure (`<header>` = page header, clearer hierarchy)
- Screen readers announce landmarks and sections, improving navigation
- Better browser accessibility APIs integration
- Improves SEO; search engines trust semantic structure for ranking

**9. content in tailwind.config.ts**
- Tells Tailwind which files to scan for class names
- Example: `content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"]`
- Without correct paths, Tailwind purges unused utilities in NoteCode files
- Must include all file patterns where you use Tailwind classes

**10. pointer-events-none on BackgroundShapes**
- Prevents decorative SVGs/shapes from intercepting clicks
- User can click through shapes to interactive elements below
- Without it: ShareButton, EditorCard might become unclickable behind shapes
- Essential for layered designs with decorative overlays

**11. gap in Header Flexbox**
- `gap-1.5` or `gap-4` controls space between logo and site name
- Responsive: `gap-1.5 sm:gap-4` increases gap on larger screens
- Improves visual hierarchy and breathing room
- Replaces manual margin calculations

**12. 16px Input Font Size**
- Mobile Safari auto-zooms on input focus if font < 16px
- Creates jarring user experience with unexpected zoom
- 16px is the "magic number" that prevents this behavior
- Improves mobile UX and accessibility

**13. Grid vs Flexbox for Hero**
- Flexbox better for Hero: single-line/column layout, flexible sizing
- Grid better for complex multi-row, multi-column layouts
- Hero typically: logo + headline + subtitle (vertical stack) = Flexbox ideal
- If Hero had sidebar with content: Grid would be better

**14. aria-label on ShareButton**
- Screen reader users need text description of button purpose
- aria-label provides accessible name when icon-only button used
- Example: `aria-label="Share this code snippet"`
- Required for WCAG accessibility compliance on icon buttons

**15. overflow-auto vs overflow-hidden**
- `overflow-auto`: shows scrollbar when content exceeds container, user can scroll
- `overflow-hidden`: hides overflow, content is cut off
- NoteCode EditorCard uses `overflow-auto` to show all code with scrolling
- Use `overflow-hidden` for fixed-size designs where content should clip

**16. Responsive Typography text-3xl md:text-5xl**
- Mobile: smaller text (text-3xl ~1.875rem) fits screen width
- Desktop: larger text (text-5xl ~3rem) readable from farther distance
- Fixed size either too small on mobile or too large on desktop
- Responsive typing improves readability across all devices

**17. @tailwind Directives**
- `@tailwind base;` = CSS reset + default styles
- `@tailwind components;` = component utilities
- `@tailwind utilities;` = responsive utilities (most used)
- NoteCode needs all three; without utilities, no Tailwind classes work

**18. Lazy-Loading Heavy Libraries**
- Improves initial page load time (Time to Interactive)
- Reduces JavaScript parse/compile time
- Improves Core Web Vitals metrics (LCP, FID)
- Mobile users see faster page, better UX

**19. rounded-2xl and shadow-2xl**
- `rounded-2xl` = 16px border radius, modern polished look
- `shadow-2xl` = strong drop shadow, creates depth and elevation
- Together: card appears "lifted" from page, modern design trend
- Improves visual hierarchy and focuses user attention

**20. Server vs Client Component Decision**
- Server component: no browser APIs needed, static content (Header, Hero text)
- Client component: uses hooks, browser APIs, interactivity (EditorCard with editor, ShareButton with click handler)
- NoteCode example: Header = server, EditorCard = client (needs `"use client"`)
- Rule: default to server, only use client when necessary

---

### Quiz 2: Mobile Design & Mobile-First (NoteCode Context)

**1. Mobile Hero Section Design**
- Smaller typography: `text-2xl sm:text-3xl` instead of desktop `text-5xl`
- Reduced vertical padding: `py-8 sm:py-20` (saves screen space)
- Tighter line-height: text doesn't wrap excessively
- Logo smaller: `w-10 sm:w-14`
- Goal: headline + subtitle fit above fold without pushing EditorCard below viewport

**2. Decorative Background Shapes on Mobile**
- Hide with `hidden sm:block` on mobile, show on tablet+
- Reduces clutter and improves text contrast
- Alternative: reduce opacity `opacity-40 sm:opacity-100`
- Or crop: `overflow-hidden` on shapes container, let shapes peek from edges
- Reason: mobile screen space precious, decorations less important than content

**3. Mobile EditorCard Sizing**
- Full width: `mx-4` or `px-4` (16px padding on each side)
- Max-width constraint: `max-w-full sm:max-w-3xl` prevents full-bleed on small screens
- Height: `max-h-[60vh]` (60% viewport height) allows user to see headline + card
- Overflow: `overflow-auto` for scrollable code
- Result: card fits within viewport, user doesn't need to scroll just to see card

**4. Mobile ShareButton Touch Target**
- Desktop: `w-10 h-10` (40px)
- Mobile: `w-12 h-12 sm:w-10 sm:h-10` (48px on mobile, scales down at tablet)
- Responsive spacing: `right-4 bottom-4 sm:right-6 sm:bottom-6` (move out from edges on mobile)
- Ensure button not overlapping code content
- Result: easy to tap, accessible to users with motor impairments

**5. Two-Column Layout Adaptation on Mobile**
- Desktop: `flex gap-8` (side-by-side)
- Mobile: `flex flex-col` (stack vertically)
- Responsive: `flex flex-col sm:flex-row`
- Use `w-full sm:w-1/2` for column sizing
- Tailwind utilities: `flex`, `flex-col`, `gap-4`, `sm:flex-row`

**6. Read-Only Code Preview on Mobile**
- Monaco/heavy editor: ~1MB bundle, slow on mobile network
- Reduces JavaScript execution, saves battery/memory
- Better performance: can render static `<pre>` in 1KB vs 1MB editor
- UX: simpler interface for mobile users, less overwhelming
- Implementation: serve static code block on mobile, lazy-load editor on desktop

**7. sm: Breakpoint**
- Tailwind `sm:` = 640px minimum width
- Typical transition: mobile features (hamburger menu, stacked layout) → desktop features (navbar, columns)
- NoteCode transitions: single-column Hero → wider layout, smaller fonts → larger fonts
- Why 640px: common tablet width (iPad mini ~600px), good for feature transition

**8. Responsive Header Logo Scaling**
- Mobile: `w-10 h-10` (40px)
- Tablet: `w-12 h-12 sm:w-12` (48px at sm breakpoint)
- Desktop: `w-16 h-16 md:w-16` (64px at md breakpoint, 768px+)
- Use aspect-ratio to maintain square logo
- Font scaling: `text-base sm:text-lg md:text-xl`

**9. Responsive Typography Justification**
- Mobile: `text-2xl` = 1.5rem, readable at 3-5 inches (phone screen)
- Tablet: `text-3xl` = 1.875rem, readable at 7-10 inches
- Desktop: `text-5xl` = 3rem, readable at 20+ inches
- Different viewing distance requires different sizes
- Fixed size: either unreadable small or overwhelming large depending on device

**10. Code Area Scrolling max-h-[60vh] overflow-auto**
- `max-h-[60vh]` = max height 60% of viewport (leaves room for headline)
- `overflow-auto` = scrollbar appears when code exceeds 60% height
- Why 60%: empirically good balance between showing code and headline visibility
- Alternative: `max-h-96` (fixed height), but responsive height better for varied code lengths

**11. Viewport Meta Tag**
- Syntax: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Without it: mobile browser renders page at 980px (default desktop width) then shrinks to fit
- Result: tiny unreadable text, users must pinch-zoom to read
- With it: respects device width, renders at actual mobile width, proper scaling

**12. Responsive Padding Strategy**
- `px-4` = 16px padding (mobile)
- `sm:px-6` = 24px padding (tablet, 640px+)
- `lg:px-8` = 32px padding (desktop, 1024px+)
- Scales with screen: more space on larger screens, conserves space on mobile
- Prevents content from touching screen edges

**13. No Hover on Mobile**
- Mobile uses touch, not mouse; hover events don't exist
- Hover-only interactions invisible to mobile users (buttons look unclickable)
- Solution: use visible states (active, focus, colors), visible text labels, icons
- ShareButton: add text label or ripple effect instead of relying on hover color change

**14. Vertical Spacing Mobile vs Desktop**
- Mobile: `gap-2 sm:gap-4 md:gap-8` (smaller gap saves vertical space)
- Desktop: larger gaps create visual breathing room
- NoteCode: reduce gap between Hero and EditorCard on mobile so both fit viewport
- Example: `space-y-4 sm:space-y-6 md:space-y-8`

**15. Mobile Navigation**
- Hide behind hamburger menu (three-line icon)
- Show/hide with state toggle: `{isMenuOpen && <nav>...</nav>}`
- Alternative: bottom navigation bar for mobile (tab navigation)
- Mobile-specific: `fixed bottom-0 left-0 right-0` for persistent bottom nav

**16. Minimum Font Size Mobile**
- 16px minimum for body text and form inputs
- Prevents Safari auto-zoom on input focus
- Below 16px: text hard to read, requires pinch-zoom
- Heading can be smaller (minimum ~14px acceptable for h2+)

**17. Mobile EditorCard Adaptation**
- Padding: `p-4 sm:p-8` (reduce padding on mobile to maximize code area)
- Border radius: `rounded-xl sm:rounded-2xl` (smaller radius on mobile)
- Shadow: `shadow-lg sm:shadow-2xl` (lighter shadow on mobile, less visual weight)
- Width: `w-full mx-4 sm:mx-0 sm:max-w-3xl` (full width with padding, constrain on desktop)

**18. Mobile ShareButton Considerations**
- Touch target: 44-48px minimum, NoteCode uses `w-12 h-12` (48px)
- Position: `right-4 bottom-4` (safe zone, not in content)
- Overlap: ensure button doesn't cover last lines of code
- Label: consider adding visible text (e.g., "Share") or larger icon for clarity
- Alternative: move button below card on mobile if overlap issue

**19. Responsive max-width Strategy**
- `max-w-full` = don't exceed 100% viewport width (prevents overflow)
- `mx-4` = horizontal margins (16px padding)
- `sm:mx-auto` = center after tablet (small screens don't center, wasted space)
- `sm:max-w-3xl` = limit width to 768px on tablet+ (prevents giant cards)
- Together: mobile gets full-width card with padding, desktop gets centered narrow card

**20. Mobile Testing Approach**
- Test on real devices (not just browser emulator): performance, touch feel, network speed
- Test various screen sizes: 320px (iPhone SE), 375px (iPhone), 414px (Plus size)
- Test on slow network: 3G speeds reveal performance issues
- Test interactions: tap, scroll, form input, keyboard
- Use DevTools device emulation for quick testing, real device for final validation

---

### Quiz 3: Desktop Design & Desktop-Specific (NoteCode Context)

**1. Maximum Content Width Desktop**
- Typically `max-w-6xl` (1152px) or `max-w-5xl` (896px)
- Reasoning: line length 50-75 characters for optimal reading speed and comprehension
- Too wide: text becomes hard to follow, eye movement excessive
- Too narrow: wastes screen space, awkward layout
- NoteCode: `max-w-3xl` for EditorCard (~768px) is good; could use `max-w-6xl` for page

**2. Desktop Hero Typography Scaling**
- Headline: `text-5xl md:text-6xl lg:text-7xl` (large, 48-64px range)
- Subtitle: `text-xl md:text-2xl lg:text-3xl` (supporting, 24-32px)
- Spacing between: `space-y-6 md:space-y-8 lg:space-y-10` (generous gaps)
- Padding: `py-20 md:py-28 lg:py-32` (large vertical space)
- Line-height: `leading-tight` for headings (1.25), `leading-relaxed` for body (1.625)

**3. Desktop Decorative Background Shapes**
- Display fully: `opacity-100` (or reduced opacity like `opacity-70` for subtlety)
- Size: full-bleed or large SVG waves, floating icons around edges
- Position: `absolute inset-0 -z-10` (behind all content)
- Examples: purple wave at bottom, floating avatars top-right
- Purpose: visual interest, brand personality, guides eye flow

**4. Desktop EditorCard Height**
- Fixed height: `h-[480px]` or `h-96` (24rem)
- Reason: consistent card appearance, prevents layout jump, shows "fold" of code
- Internal overflow: `overflow-auto` allows scrolling code without page scroll
- Alternative: `max-h-screen md:h-96` (responsive between mobile and desktop)
- Benefits: predictable layout, user knows card is complete (has scroll indicator)

**5. Desktop ShareButton Hover Effect**
- Base state: `bg-blue-600`
- Hover state: `hover:bg-blue-700` or `hover:bg-blue-800` (darker shade)
- Extra: `hover:shadow-lg` (deeper shadow on hover)
- Transition: `transition-all duration-200` (smooth color/shadow change)
- Purpose: shows button is interactive, provides visual feedback
- Desktop-only: hover doesn't exist on mobile, so only applies with Tailwind breakpoints

**6. Desktop Header Layout**
- Use Flexbox: `flex items-center gap-4`
- Logo + site name side-by-side horizontally
- Logo: `w-14 h-14` (56px on desktop)
- Site name: `text-xl font-bold`
- Optional navigation: right-aligned with `ml-auto` or in separate nav element
- Example structure: `<div className="flex items-center gap-4"><Logo /><span>NoteCode</span></div>`

**7. Generous Padding p-8 on EditorCard**
- `p-8` = 32px padding inside card (all sides)
- Creates "breathing room" around code content
- Improves readability: text not crammed against edges
- Enhances visual hierarchy: padding is negative space that focuses attention
- UX: feels less overwhelming, premium appearance
- Alternative considerations: `p-6` still generous, `p-10` excessive

**8. Dynamic Import for Monaco Editor**
- Use on desktop: `if (typeof window !== 'undefined' && window.innerWidth > 768)` or media query
- Avoids loading 1MB editor on mobile
- Can do: desktop only with `dynamic(..., { ssr: false })` in next/dynamic
- Limitation: dynamic imports work on browser side; can't directly check in server component
- Solution: make EditorCard client component, use dynamic inside

**9. Ideal Line Length Desktop**
- 50-75 characters per line (8-12 words typical)
- For NoteCode headline: ~50-60 characters before wrapping
- Reason: eyes track easily, comprehension improves, reduces reading effort
- Too long: hard to return to next line, reading speed decreases
- Achieved via `max-w-3xl` container (limits width to ~50-75 char line)

**10. Full-Bleed Background Gradient Desktop**
- Yes: use full-screen gradient or SVG wave for visual impact
- Extend gradient beyond content container: `absolute inset-0` covers full viewport
- Reason: creates immersive, modern design, draws attention to hero
- Implementation: `<div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 -z-10"></div>`
- Trade-off: more visual weight; ensure text contrast sufficient

**11. shadow-2xl vs Mobile Shadows**
- `shadow-2xl` = large drop shadow (strong visual hierarchy)
- Mobile uses `shadow-lg` or lighter (reduces visual clutter)
- Desktop: strong shadow makes card "pop" from page
- Reason: desktop has more whitespace, strong shadows more visible and impactful
- Improves focus: user attention drawn to card

**12. Desktop Page Container Padding**
- `px-8 py-20` typical for main container
- `px-8` = 32px left/right padding (generous horizontals)
- `py-20` = 80px top/bottom (large vertical spacing between sections)
- Scales content away from edges, creates balanced layout
- Alternatives: `px-6 py-16` for tighter spacing, `px-12 py-24` for more spacious

**13. Rounded-2xl vs Smaller Radius**
- `rounded-2xl` = 16px border radius (modern, polished look)
- Smaller (e.g., `rounded-lg` 8px) = more traditional, less friendly appearance
- `rounded-2xl` reflects current design trends: friendly, approachable, contemporary
- NoteCode aesthetic: collaborative code sharing tool (friendly appearance appropriate)
- Psychological effect: larger radius feels more modern, welcoming

**14. Desktop Navigation**
- Display horizontally: horizontal navbar with visible menu items
- No hamburger menu needed: desktop has space
- Example: `<nav className="flex gap-8"><a href="#">Home</a><a href="#">Docs</a></nav>`
- Sticky optional: `sticky top-0` keeps nav visible while scrolling
- Contrast to mobile: hamburger menu hides nav to save space

**15. Desktop Code Font Size**
- 14px or 16px (text-base `text-base` or `text-lg`)
- Mobile: smaller (12px, `text-sm`) or non-interactive
- Desktop: larger for comfortable reading from normal distance
- Larger font improves code readability (important for sharing code)
- Line-height: `leading-relaxed` (1.625) for code spacing

**16. Line-Height for Code leading-relaxed**
- `leading-relaxed` = 1.625x font size (more spacious)
- Standard is `leading-normal` = 1.5x (tighter)
- Code benefits from extra space: improves scanning between lines
- Prevents eye strain when reading long code blocks
- Especially important for multi-line code snippets

**17. Desktop ShareButton Tooltip**
- Show on hover: `<button className="group"><Icon /><span className="hidden group-hover:block">Share Code</span></button>`
- Position: tooltip appears on hover, shows "Share this code" or similar
- Why desktop: hover is desktop-specific; mobile doesn't need (has text label)
- Improves UX: users unsure of icon understand button purpose
- Accessibility: combines icon with text for clarity

**18. Absolute Positioning Decorative Elements**
- Position around hero: `absolute top-10 right-20`, `absolute bottom-40 left-10`
- Transforms for visual interest: `transform rotate-45`, `scale-150`
- Z-index: `-z-10` to sit behind content
- Examples: floating avatars, decorative shapes, background icons
- Purpose: guides eye, creates depth, professional appearance

**19. Larger Gaps Between Title/Subtitle Desktop**
- Desktop: `space-y-6 md:space-y-8 lg:space-y-10` (24-40px gaps)
- Mobile: `space-y-3 sm:space-y-4` (12-16px gaps)
- Reason: desktop has space; larger gaps create visual hierarchy and breathing room
- Improves readability: subtitle appears distinct, not cluttered
- Hierarchy: title + large gap + subtitle = visual separation, clarity

**20. Focus States for Accessibility**
- All interactive elements need focus styles: buttons, links, inputs
- Example: `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- Why: keyboard users navigate with Tab; focus visible indicator mandatory
- Desktop critical: keyboard users more common on desktop (not touch)
- Compliance: WCAG 2.4.7 requires visible focus indicator
- Improves UX: users know which element they're interacting with
