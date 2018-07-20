/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

    /* A test to loop through each feed in the allFeeds object
    * and ensure that each feed has a defined and non-empty
    * URL.
    */
    it('each have a defined non empty URL', function() {
      for (let feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

    /* A test to loop through each feed in the allFeeds object
    * and ensure that each feed has a defined and non-empty
    * name.
    */
    it('each have a defined non empty name', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });


  /* A test suite to named 'The menu' which tests that
   * the menu is hidden by default and wheter it toggles
   * visibility on clicking the menu icon
   */
  describe('The menu', function() {
    /* define a variable which contains the body element */
    const body = document.querySelector('body');

    /* A test to ensure that the menu is hidden by default */
    it('is hidden by default', function() {
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

    /* A test to ensure that the menu toggles visibility on
     * clicking the menu icon. It should display on first
     * click and hide on second.
     */
    it('toggles visibility on clicking the menu icon', function() {
      let menu_icon = document.querySelector('.menu-icon-link');
      // Click the menu icon for the first time and check the menu is showing
      menu_icon.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);

      // Click the menu icon again and check the menu is hidden again
      menu_icon.click();
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });
  });

  /* A test suite named 'Initial Entries' which tests that
   * there is at least one .entry element in the .feed
   * container once the loadFeed function has been called.
   */
  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, done());
    });
    /* A test to ensure that upon loadFeed function being called
     * there is at least one .entry element in the .feed container.
     */
    it('has one or more entry in the feed', function() {
      let entries = document.querySelectorAll('.feed .entry');
      expect(entries.length).toBeGreaterThan(0);
    });
  });


  /* A test suite named 'New Feed Selection' to test that
   * the content changes on calling loadFeed function
   */
  describe('New Feed Selection', function () {
    /* A test to ensure that when a new feed is loaded by the function
     * loadFeed the content actually changes
     */

  });

}());
