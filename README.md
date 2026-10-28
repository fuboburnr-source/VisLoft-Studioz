# Visloft Studios — lightweight GitHub Pages website

The photographs in this version have been compressed to make the download and upload smaller. The website layout, pages, links, and folder structure are preserved.

This repository is laid out for GitHub Pages with **Deploy from a branch**, branch `main`, folder `/(root)`.

## Recommended upload method: GitHub Desktop

GitHub's browser uploader accepts up to **100 files at once**. This website contains more than that, so the free GitHub Desktop app is easier and keeps all nested folders together.

1. On GitHub.com, create a **new public** repository named `visloft-website`, with **Add a README** checked. Don't reuse your old repository.
2. Install and sign in to **GitHub Desktop** (desktop.github.com).
3. In the new repository on GitHub.com, choose **Code → Open with GitHub Desktop**, and clone it onto your computer.
4. Extract this ZIP. **Copy everything inside the extracted folder**—including `index.html`, the `assets` directory and `.nojekyll`—into the cloned repository folder alongside the GitHub-generated README. If asked whether to replace README, you may use the one from this package.
5. In GitHub Desktop, enter a summary such as `Upload Visloft website`, click **Commit to main**, then **Push origin**.
6. In the GitHub repository, open **Settings → Pages → Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, then **Save**.
7. Wait for deployment and open `https://fuboburnr-source.github.io/visloft-website/`.

**Do not upload the ZIP itself into GitHub as your website.** GitHub Pages requires the extracted files, with `index.html` directly at the repository root.

## Test the new site before moving your domain

After the default GitHub Pages URL works, remove `visloft.ca` from the **old** repository's Pages settings and then add `visloft.ca` to the **new** repository's Pages settings. GitHub will create its `CNAME` file when the custom domain is saved. Do not attach the same domain to both repositories simultaneously.

This test package intentionally omits the old `CNAME` file so the existing website/domain configuration is not disturbed while testing.

## Assets

The HTML expects files in `assets/css`, `assets/js`, and `assets/images`. These paths have been restored from the uploaded version and previous public repositories.

Original photographs for **Central Screening Room** and **West Art Studio** were not available in any of the three public GitHub repositories. Their galleries use clearly labelled placeholders until the real photos can be supplied. Other unavailable individual gallery photos were removed, leaving existing authentic room photos.

## Contact form

The original `api/contact.php` form code is preserved, as requested. **GitHub Pages does not execute PHP, so the form will not send inquiries on this host.** The displayed contact email links remain available. For working submissions later, use a form service or PHP-capable hosting.
