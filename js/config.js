/* ==========================================================
   EA Academy — configuration
   Edit the values below to brand the platform and manage users.
   ========================================================== */
window.ACADEMY = {
  config: {
    brand: 'EA Academy',
    programTitle: 'Professional Executive Assistant Program',
    organisation: '',          // e.g. 'Aura Jewels' — shown on the certificate when filled in
    passMark: 70,              // % needed to pass a module quiz
    storageKey: 'ea-academy-progress-v2',

    /* Sign-in and cloud save.
       Before setup: each user has a passwordHash (SHA-256 of the password; both
       start as sanjana@1234) and progress stays in each browser.
       After running  node tools/setup-cloud.mjs  once: each user gets a 'vault',
       the GitHub token locked with their password. Signing in unlocks it and
       progress saves to GitHub automatically, with no settings on any device.
       To change a password later, run the setup script again. */
    users: [
      { id: 'ruchir', name: 'Ruchir',
        vault: {"iter":600000,"salt":"qzjS+IcUoZTq1aTiKHRg4Q==","iv":"uebSOjDeJxPKKBQq","data":"o4/F0rG8MvKBk1irtT1CiSoKHxTXaVuXfLrX2b7O3tendqxeFl5WbV0+zQv23GhnW4PAW6/JqjbX0crnbUg3CydLSEdfC9ZN1IUbFLZJWqGmBiEjJayqpq2mzTVz9zC4r9MZSIQPavFjv8Q84g=="} },
      { id: 'sanjana', name: 'Sanjana',
        vault: {"iter":600000,"salt":"T3+TOYqHN7lVqy71NnlVFQ==","iv":"RCxPM/aPt0A92m5c","data":"hRDVF2hKUjBqFzxbV2cw6RHr2k4WnXvlm5Elr3FD0758YJjSapl/uk1dfRa9LPW43/SsyRQ9N/07V/c9kKucMqE6ERtTyjtsECz7QXgnbXetc3XAzkgwNVU5O/+06R7EfXAJrccuR/DXcB0otA=="} }
    ],

    /* Private GitHub repository where progress/<user>.json files are saved. */
    sync: {
      owner: 'ruchir-powar',
      repo: 'ea-academy-data',
      branch: 'main',
      folder: 'progress'
    }
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
