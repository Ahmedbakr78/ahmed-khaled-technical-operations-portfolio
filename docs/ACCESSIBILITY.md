# Accessibility Standard

## Target: WCAG 2.2 AA

The portfolio aims to meet WCAG 2.2 AA for the interactive experience. This document records the implementation approach, manual checks and known limitations.

---

## 1. Accessibility Commitments

| Area | Commitment |
|:---|:---|
| Keyboard | Every interactive control is reachable and operable by keyboard |
| Focus | Focus states are visible in both themes |
| Semantics | Landmarks, headings and controls use native semantics where possible |
| Labels | Icon-only controls have accessible names |
| Motion | Silent mode and reduced-motion preferences reduce non-essential motion |
| Contrast | Text and controls target AA contrast in both themes |
| Zoom | Layout remains usable at 200% zoom |
| Content | Headings are hierarchical and descriptive |
| Forms | Inputs have visible labels and required fields are marked |
| Time | No essential content is time-limited |

---

## 2. Keyboard Map

| Key | Action |
|:---|:---|
| `Tab` | Move to the next interactive element |
| `Shift + Tab` | Move to the previous interactive element |
| `Enter` / `Space` | Activate a focused button or link |
| `Ctrl + K` / `Cmd + K` | Open or close the command palette |
| `Escape` | Close an open modal where supported |
| Arrow keys | Adjust range sliders when focused |

---

## 3. Focus Management

- Buttons and links use native focus behaviour.
- The command palette input receives focus when opened.
- Modal close buttons are keyboard reachable.
- Focus indicators must remain visible against glass surfaces.
- The mobile slidebar is a labelled complementary surface, not a keyboard trap.

### Known improvement area

Focus trapping inside every modal is not yet implemented as a shared utility. Keyboard users can still close overlays and continue navigation, but a formal focus-trap audit is tracked in the roadmap.

---

## 4. Motion and Vestibular Safety

- The control centre exposes a silent navigation mode that removes smooth scrolling.
- The 3D background can be switched to a minimal preset.
- Audio is opt-in and starts only after a user gesture.
- Animations are short and do not involve large parallax movement.
- The operating-system `prefers-reduced-motion` setting is respected where CSS animation is used.

### Recommendation

Visitors who are sensitive to motion should enable the minimal background preset and silent navigation mode.

---

## 5. Colour and Contrast

The design uses monochrome surfaces with high-opacity panels. Contrast is maintained through:

- White text on near-black glass in dark mode.
- Near-black text on near-white glass in light mode.
- Muted text reserved for secondary metadata, not essential instructions.
- Borders used alongside text, never as the only indicator of state.
- Status indicators paired with text labels.

Manual contrast checks should be repeated after any theme change.

---

## 6. Responsive and Touch Accessibility

- Primary actions have generous touch targets.
- The mobile slidebar fits within the viewport.
- Horizontal section pills remain scrollable.
- The bottom dock does not replace the main navigation.
- Text wraps rather than clipping at narrow widths.
- The layout remains usable in landscape orientation.

---

## 7. Content Accessibility

- Article content is written as short, structured paragraphs.
- The FAQ uses buttons with `aria-expanded`.
- Project metrics include text labels.
- Diagrams in the website are built from text and layout, not unlabeled images.
- External links are labelled by their destination.

---

## 8. Testing Procedure

1. Disconnect the mouse and navigate the entire site with the keyboard.
2. Confirm the command palette opens and closes with the keyboard.
3. Confirm every modal has a visible close control.
4. Run a contrast check on both themes.
5. Zoom the browser to 200% and check for clipping.
6. Enable reduced motion and confirm the site remains usable.
7. Test with a screen reader on at least one desktop browser.
8. Test on a small mobile viewport with large text enabled.
9. Confirm the contact form has visible labels and clear errors.
10. Record findings in the issue tracker.

---

## 9. Known Limitations

| Limitation | Impact | Planned action |
|:---|:---|:---|
| No shared focus-trap utility | Keyboard focus can leave an open modal | Add a reusable focus-trap hook |
| Manual contrast checks | Regressions possible after theme edits | Add axe and visual checks to CI |
| 3D background | GPU cost on low-end devices | Minimal preset and visibility pause |
| Audio visualizer | Purely decorative | Marked as presentational |
| Third-party fonts | Font loading delay | System fallbacks and preconnect |

---

## 10. Reporting an Accessibility Issue

Open a GitHub issue with the `accessibility` label and include:

- The page section.
- Browser and assistive technology.
- Steps to reproduce.
- Expected and actual behaviour.
- A screenshot or recording if possible.

Accessibility issues are treated as high priority.
