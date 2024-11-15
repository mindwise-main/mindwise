# MindWise Project - Integration Branch (`test`)

This branch (`test`) serves as the **integration branch** for the MindWise project. New features and bug fixes are merged here for testing and validation before being moved to the main branch.

---

## **Purpose of the `test` Branch**
1. To serve as the staging area for new features and fixes.
2. To test and verify changes before merging into the `main` branch.
3. To ensure the project remains stable and functional during development.

---

## **Guidelines for Working on the `test` Branch**
1. **Pull Before Making Changes** :
   Always pull the latest changes from the `test` branch before starting any new work to ensure you are working with the most up-to-date code. This minimizes the chances of merge conflicts:
   ```bash
   git pull origin test
   
2. **Push After Committing Your Changes** :
   After making and committing your changes, push them to the `test` branch and then the working updation from `test` to `main` branch:
   ```bash
   git push origin test
