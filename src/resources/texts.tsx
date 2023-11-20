const PLACEHOLDER = 'XXX'

export const TEXT_KEYS = {
  realtime_map_explanation: 'realtime_map_explanation',
  timeline_page_title: 'timeline_page_title',
  realtime_map_page_title: 'realtime_map_page_title',
  gaps_page_title: 'gaps_page_title',
  singleline_map_page_title: 'singleline_map_page_title',
  choose_datetime: 'choose_datetime',
  choose_date: 'choose_date',
  choose_time: 'choose_time',
  choose_operator: 'choose_operator',
  operator_placeholder: 'operator_placeholder',
  choose_line: 'choose_line',
  line_placeholder: 'line_placeholder',
  choose_route: 'choose_route',
  choose_stop: 'choose_stop',
  direction_arrow: 'direction_arrow',
  date_format: 'date_format',
  time_format: 'time_format',
  datetime_format: 'datetime_format',
  loading_routes: 'loading_routes',
  loading_stops: 'loading_stops',
  loading_gaps: 'loading_gaps',
  timestamp_target: 'timestamp_target',
  timestamp_gtfs: 'timestamp_gtfs',
  timestamp_siri: 'timestamp_siri',
  loading_hits: 'loading_hits',
  line_not_found: 'line_not_found',
  hits_not_found: 'hits_not_found',
  planned_time: 'planned_time',
  planned_status: 'planned_status',
  ride_as_planned: 'ride_as_planned',
  ride_missing: 'ride_missing',
  ride_extra: 'ride_extra',
  ride_duped: 'ride_duped',
  checkbox_only_gaps: 'checkbox_only_gaps',
  dashboard_page_title: 'dashboard_page_title',
  dashboard_tooltip_content: 'dashboard_tooltip_content',
  worst_lines_page_title: 'worst_lines_page_title',
  rides_planned: 'rides_planned',
  rides_actual: 'rides_actual',
  dashboard_page_graph_title_time: 'dashboard_page_graph_title_time',
  dashboard_page_graph_title_hour: 'dashboard_page_graph_title_hour',
  from_date: 'from_date',
  to_date: 'to_date',
  watch_locations_in_range: 'watch_locations_in_range',
  minutes: 'minutes',
  minutes_5: 'minutes_5',
  show_x_bus_locations: 'show_x_bus_locations',
  from_time_x_to_time_y: 'from_time_x_to_time_y',
  choose_start_time: 'choose_start_time',
  group_by_hour_tooltip_content: 'group_by_hour_tooltip_content',
  group_by_day_tooltip_content: 'group_by_day_tooltip_content',
  start: 'start',
  end: 'end',
  about_title: 'about_title',
  donate_title: 'donate_title',
  report_a_bug_title: 'report_a_bug_title',
  website_name: 'website_name',
  what_is_website: 'what_is_website',
  what_is_website_paragraph: 'what_is_website_paragraph',
  planning_information: 'planning_information',
  performance_information: 'performance_information',
  discovered_mistake: 'discovered_mistake',
  discovered_mistake_paragraph: 'discovered_mistake_paragraph',
  privacy: 'privacy',
  license: 'license',
  questions: 'questions',
  funding: 'funding',
  funding_paragraph: 'funding_paragraph',
  mr_meir: 'mr_meir',
  innovation_authority: 'innovation_authority',
  migdal_company: 'migdal_company',
  and_smaller_donors: 'and_smaller_donors',
  gaps_patterns_page_title: 'gaps_patterns_page_title',
  github_link: 'github_link',
}

export const TEXTS = {
  realtime_map_explanation: 'נתוני מיקום של אוטובוסים שנאספו בזמן אמת',
  timeline_page_title: 'לוח זמנים היסטורי',
  realtime_map_page_title: 'מפה בזמן אמת',
  gaps_page_title: 'נסיעות שלא יצאו',
  gaps_patterns_page_title: 'דפוסי נסיעות שלא יצאו',
  singleline_map_page_title: 'מפה לפי קו',
  choose_datetime: 'תאריך ושעה',
  choose_date: 'תאריך',
  choose_dates: 'תאריכים',
  choose_time: 'שעה',
  choose_operator: 'חברה מפעילה',
  operator_placeholder: 'לדוגמא: דן',
  choose_line: 'מספר קו',
  line_placeholder: 'לדוגמא: 17א',
  choose_route: `בחירת מסלול נסיעה (XXX אפשרויות)`,
  choose_stop: `בחירת תחנה (XXX אפשרויות)`,
  direction_arrow: '⟵',
  date_format: 'YYYY-MM-DD',
  time_format: 'HH:mm:ss',
  datetime_format: 'HH:mm:ss · YYYY-MM-DD',
  loading_routes: 'מסלולי נסיעה בטעינה',
  loading_stops: 'תחנות עצירה בטעינה',
  loading_gaps: 'פערי נסיעות בטעינה',
  timestamp_target: 'זמן החיפוש ⌚',
  timestamp_gtfs: 'זמן עצירה מתוכנן 🕛',
  timestamp_siri: 'זמן עצירה בפועל 🚌',
  loading_hits: 'זמני נסיעה בטעינה',
  line_not_found: 'הקו לא נמצא',
  hits_not_found: 'לא נמצאו נסיעות מתוכננות או בפועל',
  planned_time: 'שעה מתוכננת',
  planned_status: 'סטטוס',
  ride_as_planned: 'יצאה כמתוכנן ✔️',
  ride_missing: 'נסיעה חסרה ❌',
  ride_extra: 'נסיעה שלא תוכננה 🧐',
  ride_duped: 'נסיעה כפולה ❇️',
  checkbox_only_gaps: 'רק פערים',
  dashboard_page_title: 'מפעילי תח"צ לפי קיום נסיעות מתוכננות',
  dashboard_tooltip_content:
    'על כל קו בישראל מוצמד GPS שמדווח את מיקום האוטובוס כל כמה רגעים.\n' +
    'אז מה היא נסיעה שלא בוצעה? זאת נסיעה שתוכננה, אבל לא דווח שיצאה בנתוני הGPS. תוכלו לראות אותה באפליקציה למשל, אבל כשתחכו בתחנה, היא לעולם לא תגיע',
  worst_lines_page_title: 'הקווים הגרועים ביותר',
  rides_planned: 'נסיעות שתוכננו',
  rides_actual: 'נסיעות שיצאו',
  dashboard_page_graph_title_day: 'אחוזי יציאה מסך הנסיעות לפי יום',
  dashboard_page_graph_title_hour: 'אחוזי יציאה מסך הנסיעות לפי שעה',
  from_date: 'מתאריך',
  to_date: 'עד תאריך',
  watch_locations_in_range: 'צפה במיקומי אוטובוסים בטווח של',
  minutes: 'דקות',
  minutes_5: '5 דקות',
  show_x_bus_locations: 'מיקומי אוטובוסים',
  from_time_x_to_time_y: 'משעה XXX עד שעה YYY',
  choose_start_time: 'בחירת שעת התחלה',
  group_by_day_tooltip_content: 'לפי יום',
  group_by_hour_tooltip_content: 'לפי שעה',
  start: 'התחלה',
  end: 'סיום',
  about_title: 'אודות',
  donate_title: 'לתרומות',
  report_a_bug_title: 'דיווח על באג',
  website_name: 'דאטאבוס',
  what_is_website: 'מהו אתר “דאטאבוס”?',
  what_is_website_paragraph:
    'אתר דאטאבוס של הסדנא לידע ציבורי מציג נתונים על איכות קווי התחבורה הציבורית בארץ (אמינות, דיוק, מסלול). דאטאבוס מחבר למעשה בין מספר מקורות מידע ממשלתיים:',
  planning_information:
    "מידע התכנון - GTFS - המפורסם כל יום ומכיל את פרטי הקווים, מיקומי התחנות, שעות המעבר בהן וכו'.",
  performance_information:
    'מידע הביצוע - SIRI - לכל אוטובוס בישראל מוצמד משדר GPS שמדווח את מיקום האוטובוס כל כמה שניות.',
  discovered_mistake: 'גילינו טעות או מידע לא מעודכן, מה עושים?',
  discovered_mistake_paragraph:
    'מכיוון שכל המידע המוצג באתר מתבסס על מקורות המידע הרשמיים, מומלץ לפנות לגורם המפרסם לצורך בירור או תיקון הבעיה. צוות “דאטאבוס“ ישמח לסייע לכם להבין מיהו הגורם הממשלתי שפרסם את הנתון או המידע שדורשים בירור או תיקון.',
  privacy: 'פרטיות',
  license: 'רשיון שימוש',
  questions: 'שאלות? תגובות? רעיונות?',
  funding: 'מימון',
  funding_paragraph: (
    <>
      דאטא בוס מפותח בעבודת מתנדבים ומבוסס על{' '}
      <a href="https://open-bus-stride-api.hasadna.org.il/docs">Open API</a> שפותח בסדנא לידע ציבורי
      בעזרתם הנדיבה של -
    </>
  ),
  mr_meir: 'מר אשר מאיר',
  innovation_authority: 'רשות החדשנות',
  migdal_company: '“מגדל בקהילה“',
  and_smaller_donors: 'ותרומות קטנות נוספות של ידידי ואוהדי הסדנא.',
  all_rides_completed: 'כמעט / כל הנסיעות בוצעו',
  missing_rides: 'מהנסיעות חסרות',
  order_by_hour: 'לפי שעה',
  order_by_severity: 'לפי חומרה',
  line: 'קו',
  from: 'מוצא',
  destination: 'יעד',
  sample_time: 'זמן דגימה',
  velocity: 'מהירות',
  drive_direction: 'כיוון נסיעה:',
  coords: 'נ.צ:',
  vehicle_ref: 'לוחית רישוי',
  hide_document: 'הסתר מידע לגיקים',
  show_document: 'הצג מידע לגיקים',
  bearing: 'מעלות',
  kmh: 'קמ״ש',
  github_link: 'github_link',
}

export const formatted = (text: string, value: string) => text.replace(PLACEHOLDER, value)
