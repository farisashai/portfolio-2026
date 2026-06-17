import type { CSSProperties, ReactNode } from "react";

const R = "0.375rem";

const caption: CSSProperties = {
  fontSize: "0.6875rem",
  color: "var(--muted-foreground)",
  padding: "0.5rem 0.75rem",
  borderBottom: "1px solid var(--border)",
  background: "var(--muted)",
  lineHeight: 1.4,
};

const shell: CSSProperties = {
  borderRadius: R,
  border: "1px solid var(--border)",
  overflow: "hidden",
  minWidth: 0,
};

const pad: CSSProperties = { padding: "0.875rem", background: "var(--background)" };

const field: CSSProperties = {
  fontSize: "0.75rem",
  padding: "0.35rem 0.5rem",
  border: "1px solid var(--border)",
  borderRadius: R,
  color: "var(--foreground)",
  background: "var(--background)",
};

const muted: CSSProperties = { fontSize: "0.75rem", color: "var(--muted-foreground)" };

function Compare({
  bugLabel,
  fixedLabel,
  bug,
  fixed,
}: {
  bugLabel: string;
  fixedLabel: string;
  bug: ReactNode;
  fixed: ReactNode;
}) {
  return (
    <div className="not-prose my-6 grid grid-cols-1 gap-3 md:grid-cols-2">
      <div style={shell}>
        <div style={caption}>{bugLabel}</div>
        {bug}
      </div>
      <div style={shell}>
        <div style={caption}>{fixedLabel}</div>
        {fixed}
      </div>
    </div>
  );
}

function btn(radius: string, primary = false): CSSProperties {
  return {
    ...field,
    borderRadius: radius,
    padding: primary ? "0.35rem 0.75rem" : "0.35rem 0.5rem",
    background: primary ? "var(--foreground)" : "var(--background)",
    color: primary ? "var(--background)" : "var(--muted-foreground)",
    fontWeight: 500,
  };
}

export function BorderRadiusDemo() {
  const title: CSSProperties = {
    fontSize: "0.8125rem",
    fontWeight: 500,
    marginBottom: "0.35rem",
    color: "var(--foreground)",
  };

  const label: CSSProperties = {
    fontSize: "0.6875rem",
    marginBottom: "0.25rem",
    color: "var(--muted-foreground)",
  };

  function WebhookPanel({ broken }: { broken: boolean }) {
    const chip: CSSProperties = {
      fontSize: "0.6875rem",
      padding: "0.15rem 0.4rem",
      borderRadius: broken ? "9999px" : R,
      border: "1px solid var(--border)",
      color: "var(--muted-foreground)",
    };

    return (
      <div style={pad}>
        <div style={title}>Webhook endpoint</div>
        <div style={label}>Endpoint URL</div>
        <div style={{ ...field, marginBottom: "0.625rem" }}>https://api.acme.com/hooks</div>

        <div
          style={{
            ...label,
            fontSize: broken ? "0.75rem" : "0.6875rem",
            marginBottom: "0.35rem",
          }}
        >
          Subscribed events
        </div>
        <div style={{ display: "flex", gap: "0.35rem", marginBottom: "0.625rem", flexWrap: "wrap" }}>
          <div style={chip}>policy.created</div>
          <div style={chip}>policy.updated</div>
        </div>

        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: broken ? "0.25rem" : R,
            padding: "0.45rem 0.5rem",
            marginBottom: "0.625rem",
            fontSize: broken ? "0.6875rem" : "0.75rem",
            fontFamily: broken ? "ui-monospace, monospace" : "inherit",
            color: "var(--muted-foreground)",
          }}
        >
          Last delivery · 200 OK · policy.created
        </div>

        <div style={{ display: "flex", gap: "0.35rem", justifyContent: "flex-end" }}>
          <div style={btn(R)}>Test</div>
          <div style={btn(R, true)}>Save</div>
        </div>
      </div>
    );
  }

  return (
    <Compare
      bugLabel="Form, tags, and log row — each built with different tokens"
      fixedLabel="Same panel — one radius and type scale throughout"
      bug={<WebhookPanel broken />}
      fixed={<WebhookPanel broken={false} />}
    />
  );
}

const inputPlaceholder: CSSProperties = {
  ...field,
  color: "var(--muted-foreground)",
};

function InputGroup({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: R, overflow: "hidden" }}>
      {children}
    </div>
  );
}

function InputGroupSegment({
  children,
  muted,
  grow,
  last,
  width,
}: {
  children: ReactNode;
  muted?: boolean;
  grow?: boolean;
  last?: boolean;
  width?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.35rem 0.5rem",
        fontSize: "0.75rem",
        background: muted ? "var(--muted)" : "var(--background)",
        color: muted ? "var(--muted-foreground)" : "var(--foreground)",
        borderRight: last ? undefined : "1px solid var(--border)",
        flex: grow ? 1 : undefined,
        width,
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );
}

const fieldLabel: CSSProperties = {
  fontSize: "0.6875rem",
  color: "var(--muted-foreground)",
  marginBottom: "0.2rem",
};

function PaymentField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div style={fieldLabel}>{label}</div>
      {children}
    </div>
  );
}

function PlainInput({ value }: { value: string }) {
  return <div style={{ ...field, color: "var(--foreground)" }}>{value}</div>;
}

function PaymentForm({ grouped }: { grouped: boolean }) {
  const section: CSSProperties = {
    fontSize: "0.6875rem",
    fontWeight: 500,
    color: "var(--muted-foreground)",
    marginTop: "0.15rem",
  };

  return (
    <div style={{ ...pad, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div>
        <div style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--foreground)" }}>Payment</div>
        <div style={{ fontSize: "0.6875rem", color: "var(--muted-foreground)", marginTop: "0.15rem" }}>
          Pro plan · $49/month
        </div>
      </div>

      <PaymentField label="Amount due">
        {grouped ? (
          <InputGroup>
            <InputGroupSegment muted width="2.75rem">
              $
            </InputGroupSegment>
            <InputGroupSegment grow last>
              49.00
            </InputGroupSegment>
          </InputGroup>
        ) : (
          <PlainInput value="USD 49.00" />
        )}
      </PaymentField>

      <div style={section}>Card</div>

      <PaymentField label="Card number">
        <PlainInput value="4242 4242 4242 4242" />
      </PaymentField>

      {grouped ? (
        <PaymentField label="Expiration · Security code">
          <InputGroup>
            <InputGroupSegment grow>04 / 28</InputGroupSegment>
            <InputGroupSegment grow last width="4.5rem">
              123
            </InputGroupSegment>
          </InputGroup>
        </PaymentField>
      ) : (
        <>
          <PaymentField label="Expiration">
            <PlainInput value="04 / 28" />
          </PaymentField>
          <PaymentField label="Security code">
            <PlainInput value="123" />
          </PaymentField>
        </>
      )}

      <PaymentField label="Name on card">
        <PlainInput value="Alex Kim" />
      </PaymentField>

      <div style={section}>Billing address</div>

      <PaymentField label="Street">
        <PlainInput value="742 Evergreen Terrace" />
      </PaymentField>

      {grouped ? (
        <PaymentField label="City · State · ZIP">
          <InputGroup>
            <InputGroupSegment grow>Springfield</InputGroupSegment>
            <InputGroupSegment width="2.25rem">IL</InputGroupSegment>
            <InputGroupSegment last width="3.25rem">
              62704
            </InputGroupSegment>
          </InputGroup>
        </PaymentField>
      ) : (
        <>
          <PaymentField label="City">
            <PlainInput value="Springfield" />
          </PaymentField>
          <PaymentField label="State">
            <PlainInput value="IL" />
          </PaymentField>
          <PaymentField label="ZIP">
            <PlainInput value="62704" />
          </PaymentField>
        </>
      )}
    </div>
  );
}

export function AlignmentFormDemo() {
  return (
    <Compare
      bugLabel="Currency, expiry, and billing fields each on their own row"
      fixedLabel="Related fields in input groups — amount, card, address"
      bug={<PaymentForm grouped={false} />}
      fixed={<PaymentForm grouped />}
    />
  );
}

const flat = { fontSize: "0.8125rem", fontWeight: 500, color: "var(--foreground)" } as const;
const flatWeight = { fontSize: flat.fontSize, fontWeight: flat.fontWeight } as const;

const tiered = {
  title: { fontSize: "0.8125rem", fontWeight: 500, color: "var(--foreground)" },
  body: { fontSize: "0.75rem", fontWeight: 400, color: "var(--muted-foreground)" },
  label: { fontSize: "0.6875rem", fontWeight: 400, color: "var(--muted-foreground)" },
} as const;

function PolicySnippet({ uniform }: { uniform: boolean }) {
  const t = uniform ? flat : tiered.title;
  const b = uniform ? flat : tiered.body;
  const l = uniform ? flat : tiered.label;

  return (
    <div style={pad}>
      <div style={{ ...t, marginBottom: "0.2rem" }}>Require MFA</div>
      <div style={{ ...b, marginBottom: "0.625rem", lineHeight: 1.4 }}>
        Block access without two-factor authentication.
      </div>
      <div style={{ ...l, marginBottom: "0.25rem" }}>Environment</div>
      <div style={{ ...field, marginBottom: "0.5rem" }}>Production</div>
      <div style={{ ...l, marginBottom: "0.25rem" }}>Action</div>
      <div style={{ ...field, marginBottom: "0.625rem" }}>Deny</div>
      <div
        style={{
          display: "flex",
          flexDirection: uniform ? "column" : "row",
          gap: "0.35rem",
        }}
      >
        <div
          style={
            uniform
              ? { ...btn(R), ...flatWeight, color: "var(--muted-foreground)", textAlign: "center", width: "100%" }
              : btn(R)
          }
        >
          Cancel
        </div>
        <div
          style={
            uniform
              ? { ...btn(R, true), ...flatWeight, textAlign: "center", width: "100%" }
              : btn(R, true)
          }
        >
          Save
        </div>
      </div>
    </div>
  );
}

export function HierarchyDemo() {
  return (
    <Compare
      bugLabel="Title, body, labels, and buttons — same size and weight"
      fixedLabel="Size and weight show what matters"
      bug={<PolicySnippet uniform />}
      fixed={<PolicySnippet uniform={false} />}
    />
  );
}

function Toggle() {
  return (
    <div
      style={{
        width: "1.875rem",
        height: "1rem",
        borderRadius: "9999px",
        background: "var(--muted)",
        border: "1px solid var(--border)",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "0.75rem",
          height: "0.75rem",
          borderRadius: "9999px",
          background: "var(--background)",
          border: "1px solid var(--border)",
          position: "absolute",
          top: "1px",
          left: "1px",
        }}
      />
    </div>
  );
}

const integrations = [
  { name: "Slack", desc: "Post violations to a channel" },
  { name: "PagerDuty", desc: "Open incidents on denials" },
];

export function DensityDemo() {
  const Row = ({ name, desc }: { name: string; desc: string }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
      <div>
        <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--foreground)" }}>{name}</div>
        <div style={{ fontSize: "0.6875rem", color: "var(--muted-foreground)" }}>{desc}</div>
      </div>
      <Toggle />
    </div>
  );

  return (
    <Compare
      bugLabel="Two toggles — each alone in an oversized card"
      fixedLabel="Same two toggles — grouped in one compact card"
      bug={
        <div style={pad}>
          {integrations.map((item) => (
            <div
              key={item.name}
              style={{
                border: "1px solid var(--border)",
                borderRadius: R,
                padding: "1.25rem 1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <div style={{ fontSize: "0.75rem", fontWeight: 500, marginBottom: "0.25rem" }}>{item.name}</div>
              <div style={{ ...muted, marginBottom: "0.75rem" }}>{item.desc}</div>
              <Toggle />
            </div>
          ))}
        </div>
      }
      fixed={
        <div style={pad}>
          <div style={{ border: "1px solid var(--border)", borderRadius: R, overflow: "hidden" }}>
            {integrations.map((item, i) => (
              <div
                key={item.name}
                style={{
                  padding: "0.625rem 0.75rem",
                  borderBottom: i === 0 ? "1px solid var(--border)" : undefined,
                }}
              >
                <Row name={item.name} desc={item.desc} />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

function SelectField({ value }: { value: string }) {
  return (
    <div style={{ ...field, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span>{value}</span>
      <span style={{ color: "var(--muted-foreground)", fontSize: "0.625rem" }}>▾</span>
    </div>
  );
}

const labelStyle: CSSProperties = { ...muted, marginBottom: "0.2rem", fontSize: "0.6875rem" };

function InviteSnippet({ good }: { good: boolean }) {
  return (
    <div style={pad}>
      <div style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.625rem" }}>
        Invite teammate
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <div style={labelStyle}>Email</div>
        <div style={{ ...field, borderColor: "#ef4444", marginBottom: good ? "0.15rem" : 0 }}>colleague.company.com</div>
        {good ? (
          <div style={{ fontSize: "0.6875rem", color: "#ef4444" }}>Must include an @ symbol</div>
        ) : null}
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <div style={labelStyle}>Name</div>
        <div style={field}>Alex Kim</div>
      </div>
      <div style={{ marginBottom: good ? 0 : "0.25rem" }}>
        <div style={labelStyle}>Role</div>
        {good ? (
          <SelectField value="Admin" />
        ) : (
          <>
            <div style={{ ...field, borderColor: "#ef4444" }}>superadmin</div>
            <div style={{ fontSize: "0.6875rem", color: "var(--muted-foreground)", marginTop: "0.2rem" }}>
              member, admin, or viewer
            </div>
          </>
        )}
      </div>
      {!good ? (
        <div style={{ fontSize: "0.6875rem", color: "#ef4444" }}>Fix form errors to submit</div>
      ) : null}
    </div>
  );
}

export function ErrorMessageDemo() {
  return (
    <Compare
      bugLabel="Generic errors at the bottom, free text on a fixed set of values"
      fixedLabel="Specific errors on each field, select for known options"
      bug={<InviteSnippet good={false} />}
      fixed={<InviteSnippet good />}
    />
  );
}
