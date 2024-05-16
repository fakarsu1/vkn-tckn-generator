---
layout: default
title: "Vkn / Tckn Generator"
description: "Generate valid VKN and TCKN numbers easily with our tool."
---

<div class="col-lg-6 p-2">
  <div class="card">
    <div class="card-header text-center">
      <h4>Generate Vkn</h4>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <label for="generatedVknInput" class="form-label">Vkn :</label>
        <div class="input-group">
          <input type="tel" readonly class="form-control" id="generatedVknInput" />
          <button type="button" class="btn btn-outline-secondary btn-copy" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus"
            data-bs-content="Copy to clipboard" data-copy-target="generatedVknInput">Copy</button>
        </div>
      </div>
      <div class="d-grid gap-2">
        <button type="button" class="btn btn-primary btn-block" id="generateVknButton">Generate</button>
      </div>
    </div>
  </div>
</div>

<div class="col-lg-6 p-2">
  <div class="card">
    <div class="card-header text-center">
      <h4>Generate Tckn</h4>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <label for="generatedTcknInput" class="form-label">Tckn :</label>
        <div class="input-group">
          <input type="tel" readonly class="form-control" id="generatedTcknInput" />
          <button type="button" class="btn btn-outline-secondary btn-copy" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus"
            data-bs-content="Copy to clipboard" data-copy-target="generatedTcknInput">Copy</button>
        </div>
      </div>
      <div class="d-grid gap-2">
        <button type="button" class="btn btn-primary btn-block" id="generateTcknButton">Generate</button>
      </div>
    </div>
  </div>
</div>

<div class="col-lg-6 p-2">
  <div class="card">
    <div class="card-header text-center">
      <h4>Validate Vkn</h4>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <label for="validateVknInput" class="form-label">Vkn :</label>
        <input type="tel" class="form-control" id="validateVknInput" />
      </div>
    </div>
  </div>
</div>

<div class="col-lg-6 p-2">
  <div class="card">
    <div class="card-header text-center fw-bold">
      <h4>Validate Tckn</h4>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <label for="validateTcknInput" class="form-label">Tckn :</label>
        <input type="tel" class="form-control" id="validateTcknInput" />
      </div>
    </div>
  </div>
</div>