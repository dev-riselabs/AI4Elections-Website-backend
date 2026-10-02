const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api").replace(/\/$/, "");

const booleanFields = new Set([
  "has_solution_idea",
  "has_prototype",
  "team_matching",
  "accessibility_requirements",
  "responsible_participation_confirmed",
  "information_accurate",
  "privacy_consent",
  "community_opt_in",
  "applicant_declaration_agreed",
  "community_consent",
  "email_updates",
]);

const numericFields = new Set(["years_experience", "team_size"]);

export class ApiRequestError extends Error {
  errors: Record<string, string[]>;

  constructor(message: string, errors: Record<string, string[]> = {}) {
    super(message);
    this.errors = errors;
  }
}

export async function postForm<T>(
  endpoint: string,
  formData: FormData,
): Promise<T> {
  const payload: Record<string, unknown> = {};

  for (const [submittedName, value] of formData.entries()) {
    const isArrayField = submittedName.endsWith("[]");
    const name = isArrayField ? submittedName.slice(0, -2) : submittedName;

    if (isArrayField) {
      const values = payload[name];
      payload[name] = Array.isArray(values) ? [...values, value] : [value];
    } else {
      payload[name] = value;
    }
  }

  for (const field of booleanFields) {
    const value = payload[field];
    if (typeof value === "string") {
      payload[field] = value === "true" || value === "1";
    }
  }

  for (const field of numericFields) {
    const value = payload[field];
    if (typeof value === "string" && value !== "") {
      payload[field] = Number(value);
    }
  }

  if (endpoint === "/community-memberships" && payload.email_updates === undefined) {
    payload.email_updates = false;
  }

  let response: Response;
  try {
    response = await fetch(`${apiBaseUrl}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ApiRequestError("Could not reach the application server. Please try again.");
  }

  const result = (await response.json().catch(() => ({}))) as {
    message?: string;
    errors?: Record<string, string[]>;
  };

  if (!response.ok) {
    throw new ApiRequestError(
      result.message || "Your submission could not be completed.",
      result.errors,
    );
  }

  return result as T;
}