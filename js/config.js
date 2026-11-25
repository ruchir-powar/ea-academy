/* ==========================================================
   EA Academy — configuration
   Edit the values below to brand the platform for your company.
   ========================================================== */
window.ACADEMY = {
  config: {
    brand: 'EA Academy',
    programTitle: 'Professional Executive Assistant Program',
    organisation: '',          // e.g. 'Aura Jewels' — shown on the certificate when filled in
    passMark: 70,              // % needed to pass a module quiz
    storageKey: 'ea-academy-progress-v1'
  },
  courses: [],
  scenarios: { ea: [], travel: [] },
  glossary: []
};

ACADEMY.addCourse = function (course) {
  this.courses.push(course);
  return course;
};

ACADEMY.addModules = function (courseId, modules) {
  var c = this.courses.find(function (x) { return x.id === courseId; });
  if (!c) throw new Error('Unknown course ' + courseId);
  c.modules.push.apply(c.modules, modules);
};
