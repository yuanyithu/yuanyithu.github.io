# Domain Setup

The site is currently public at:

```text
https://yuanyithu.github.io
```

Do not add a root `CNAME` file until `yuanyithu.io` has been registered and DNS is configured. If `CNAME` is added too early, GitHub Pages redirects `yuanyithu.github.io` to `yuanyithu.io`, and the public site becomes unreachable while the domain has no DNS records.

## Current Status

As of 2026-05-30:

- `https://yuanyithu.github.io` serves the homepage, CSS, JavaScript, and CV PDFs.
- `yuanyithu.io` is not registered or does not have public DNS records.
- `whois yuanyithu.io` returns `Domain not found`.
- DNS lookups for `A`, `AAAA`, and `CNAME` records return no records.

## Enable `yuanyithu.io`

After registering `yuanyithu.io`, configure DNS at the domain registrar.

For the apex domain `yuanyithu.io`, add these GitHub Pages `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional IPv6 `AAAA` records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Then enable the custom domain in the repository:

1. Copy `CNAME.example` to `CNAME`.
2. Commit and push `CNAME`.
3. In GitHub, open `Settings > Pages`.
4. Confirm the custom domain is `yuanyithu.io`.
5. Wait for GitHub Pages to issue the HTTPS certificate.
6. Enable `Enforce HTTPS` after the certificate is ready.

## Verification

Run these checks after DNS propagates:

```sh
dig +short A yuanyithu.io
curl -I -L https://yuanyithu.io
curl -I -L https://yuanyithu.io/styles.css
curl -I -L https://yuanyithu.io/script.js
curl -I -L https://yuanyithu.io/cv-en.pdf
curl -I -L https://yuanyithu.io/cv-zh.pdf
```

Expected result: all `curl` checks return `200 OK` over HTTPS.
