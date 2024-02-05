const fs = require('fs');
const path = require('path');

describe('Component stories coverage', () => {
  it('each component should have a corresponding stories.js file', () => {
    const componentsDir = path.join(__dirname, '../src/components');

    const componentFolders = fs.readdirSync(componentsDir).filter(file => {
      return fs.statSync(path.join(componentsDir, file)).isDirectory();
    });

    componentFolders.forEach(folder => {
      const expectedStoryFile = `${folder}.stories.js`;
      const folderPath = path.join(componentsDir, folder);
      const filesInFolder = fs.readdirSync(folderPath);
      expect(filesInFolder).toContain(expectedStoryFile);
    });
  });
});
