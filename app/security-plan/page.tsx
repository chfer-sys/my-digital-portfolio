import Link from "next/link"

export default function SecurityPlanPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Security Plan</h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left">
                <th className="border-b py-2 pr-4">Control Type</th>
                <th className="border-b py-2">Planned Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 pr-4 align-top">Transport Security</td>
                <td className="py-3">Enforce HTTPS/HSTS to ensure all data in transit is encrypted.</td>
              </tr>
              <tr className="bg-muted/5">
                <td className="py-3 pr-4 align-top">Content Security Policy</td>
                <td className="py-3">Implement CSP headers to prevent Cross-Site Scripting (XSS).</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 align-top">Dependency Scanning</td>
                <td className="py-3">Use GitHub Dependabot to monitor for vulnerable npm packages.</td>
              </tr>
              <tr className="bg-muted/5">
                <td className="py-3 pr-4 align-top">Input Validation</td>
                <td className="py-3">Sanitize all inputs on the contact form to prevent injection attacks.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <Link href="/">
            <a className="text-sm text-primary underline">← Back to home</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
